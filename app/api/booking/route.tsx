import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

// Create server-side Supabase client
const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Booking API received:", body)

    // Validate required fields
    const { name, email, phone, service, date, time, message } = body

    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Save to Supabase database
    const { data, error: dbError } = await supabaseServer
      .from('bookings')
      .insert([
        {
          name,
          email,
          phone,
          service,
          preferred_date: date,
          preferred_time: time,
          message: message || null,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: "Failed to save booking to database" }, 
        { status: 500 }
      )
    }

    const bookingId = data?.[0]?.id || `STUDIO17-${Date.now()}`

    // Send email to business
    const businessEmailContent = `
      <h2>New Studio Booking Request</h2>
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        ${message ? `<p><strong>Additional Details:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ""}
      </div>
      <hr>
      <p><em>Booking ID: ${bookingId}</em></p>
      <p><small>Reply to this email to contact the customer directly.</small></p>
    `

    // Send email to customer confirmation
    const customerEmailContent = `
      <h2>Booking Request Received - Studio 17</h2>
      <p>Hi ${name},</p>
      <p>Thank you for your booking request! We've received your request for <strong>${service}</strong>.</p>
      
      <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #007acc;">
        <h3>Your Booking Details:</h3>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Requested Date:</strong> ${date}</p>
        <p><strong>Requested Time:</strong> ${time}</p>
        <p><strong>Booking Reference:</strong> ${bookingId}</p>
      </div>

      <p>We'll review your request and contact you within 24 hours to confirm your appointment and discuss any additional details.</p>
      
      <p>If you have any urgent questions, feel free to contact us directly.</p>
      
      <p>We look forward to working with you!</p>
      
      <p>Best regards,<br>
      <strong>Studio 17 Team</strong><br>
      nycstudio17@gmail.com</p>
    `

    try {
      // Send email to business
      const { error: businessEmailError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: ['nycstudio17@gmail.com'],
        subject: `New Booking Request: ${service} - ${name}`,
        html: businessEmailContent,
        replyTo: email // This allows you to reply directly to the customer
      })

      // Send confirmation email to customer
      const { error: customerEmailError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: [email],
        subject: 'Booking Request Confirmed - Studio 17',
        html: customerEmailContent
      })

      if (businessEmailError) {
        console.error('Business email error:', businessEmailError)
      }
      
      if (customerEmailError) {
        console.error('Customer email error:', customerEmailError)
      }

      // Log success even if email has issues
      if (businessEmailError || customerEmailError) {
        console.log("[v0] Booking saved to database but email delivery had issues")
      } else {
        console.log("[v0] Booking processed successfully and emails sent to:", email)
      }

    } catch (emailError) {
      console.error("[v0] Email sending failed:", emailError)
      // Continue processing even if email fails since we saved to database
    }


    
    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully. We'll contact you within 24 hours!",
      bookingId: bookingId,
    })

  } catch (error) {
    console.error("[v0] Booking API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
