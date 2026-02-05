import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = process.env.CONTACT_EMAIL || "madkour.youssef@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // Try to send email using Resend if API key is configured
    if (resendApiKey) {
      try {
        // Dynamic import to avoid build errors if resend is not installed
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
        
        await resend.emails.send({
          from: fromEmail,
          to: recipientEmail,
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <p style="color: #e5e7eb; margin: 10px 0;">
                  <strong style="color: #f59e0b;">Name:</strong> ${name}
                </p>
                <p style="color: #e5e7eb; margin: 10px 0;">
                  <strong style="color: #f59e0b;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #60a5fa;">${email}</a>
                </p>
                <p style="color: #e5e7eb; margin: 10px 0;">
                  <strong style="color: #f59e0b;">Message:</strong>
                </p>
                <div style="background-color: #111827; padding: 15px; border-radius: 4px; margin-top: 10px; color: #e5e7eb; white-space: pre-wrap;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
                This email was sent from your portfolio contact form.
              </p>
            </div>
          `,
        });

        console.log("Email sent successfully via Resend");
      } catch (emailError) {
        console.error("Error sending email via Resend:", emailError);
        // Fall through to logging method
      }
    }

    // Log the submission (always log for debugging/backup)
    console.log("New contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      emailSent: !!resendApiKey
    });

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}