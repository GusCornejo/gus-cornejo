import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, body } = await request.json();
    await resend.emails.send({
      from: "Gus Cornejo <noreply@mail.guscornejo.com>",
      to: "gus.cornejo@icloud.com",
      subject: subject,
      html: `<div>
        <h1>${name}</h1>
        <h2>${email}</h2>
        <h3>${body}</h3>
      </div>`,
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}