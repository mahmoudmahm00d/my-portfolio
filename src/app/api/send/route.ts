import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, cfTurnstileResponse } = await req.json();
    // If using a reverse proxy, ensure the X-Real-IP header is enabled to accurately capture the client's original IP address.
    const ip = req.headers.get("x-real-ip");
    // Create form data for Turnstile verification
    const verifyFormData = new FormData();
    verifyFormData.append(
      "secret",
      process.env.NEXT_PRIVATE_TURNSTILE_SECRET_KEY as string
    );
    verifyFormData.append("response", String(cfTurnstileResponse));
    verifyFormData.append("remoteip", String(ip));

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: verifyFormData,
      method: "POST",
    });

    if (!result.ok) {
      return NextResponse.json(
        { success: false, error: "Turnstile verification failed" },
        { status: result.status }
      );
    }

    const json = await result.json();
    if (!json.success) {
      return NextResponse.json(
        { success: false, error: "Turnstile verification failed" },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP credentials from .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New contact message from "${name}"`,
      text: `Email: ${email}\n\n${message}`,
      html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
