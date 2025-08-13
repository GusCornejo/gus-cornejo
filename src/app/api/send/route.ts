import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {

    const  {name, email, subject, body } = await request.json();
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "gustavoxcornejo@gmail.com",
        subject: subject,
        html: 
        `<div>
            <h1>${name}</h1>
            <h2>${email}</h2>
            <h3>${body}</h3>
        </div>`,
    });
}