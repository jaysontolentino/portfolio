"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.RECEIVER_EMAIL || "jaysontolentino.ph@gmail.com";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: receiverEmail,
      subject: `New message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (err) {
    return { success: false, error: "Failed to send message." };
  }
}
