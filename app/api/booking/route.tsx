import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Booking API received:", body)

    // Validate required fields
    const { name, email, phone, service, date, time, message } = body

    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailData = {
      to: "nycstudio17@gmail.com",
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Studio Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        ${message ? `<p><strong>Additional Details:</strong> ${message}</p>` : ""}
        <hr>
        <p><em>Booking ID: STUDIO17-${Date.now()}</em></p>
      `,
    }

    // Send email using a service like Resend, SendGrid, or similar
    // For demo purposes, we'll simulate the email sending
    try {
      // In production, you would use an actual email service:
      // await sendEmail(emailData)

      // Simulate email sending delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("[v0] Email would be sent to nycstudio17@gmail.com with booking details")
    } catch (emailError) {
      console.error("[v0] Email sending failed:", emailError)
      // Continue processing even if email fails
    }

    console.log("[v0] Booking processed successfully for:", email)

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully. We'll contact you within 24 hours!",
      bookingId: `STUDIO17-${Date.now()}`,
    })
  } catch (error) {
    console.error("[v0] Booking API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
