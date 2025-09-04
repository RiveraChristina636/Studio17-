import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Sent from Studio 17 Contact Form</small></p>
    `

    // In a real implementation, you would use an email service like:
    // - Resend: await resend.emails.send({ to: 'nycstudio17@gmail.com', ... })
    // - SendGrid: await sgMail.send({ to: 'nycstudio17@gmail.com', ... })
    // - Nodemailer with SMTP

    console.log("Contact form submission:", {
      to: "nycstudio17@gmail.com",
      from: email,
      subject: `Contact Form: ${subject}`,
      html: emailContent,
    })

    // Simulate email sending success
    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
