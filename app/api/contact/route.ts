import { NextRequest, NextResponse } from "next/server"

type ContactBody = {
  name: string
  email: string
  message: string
}

const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

export async function POST(request: NextRequest) {
  const body: ContactBody = await request.json()
  const { name, email, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim() || !emailIsValid(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid contact payload" },
      { status: 400 }
    )
  }

  const smtpConfigured =
    Boolean(process.env.SMTP_HOST) &&
    Boolean(process.env.SMTP_USER) &&
    Boolean(process.env.SMTP_PASS) &&
    Boolean(process.env.SMTP_TO)

  if (!smtpConfigured) {
    console.log("[contact] received message", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message:
        "Email service is not configured. The message was received and logged on the server.",
    })
  }

  // If you want to enable real email delivery, install an SMTP library such as nodemailer
  // and configure SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_TO in your environment.
  return NextResponse.json({ success: true, message: "Message received." })
}
