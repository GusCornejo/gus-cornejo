import { Resend } from "resend";
import { getClientIp, rateLimit } from "@/helper/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_NAME = 100;
const MAX_SUBJECT = 200;
const MAX_BODY = 5000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function asTrimmedString(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limited = rateLimit(`contact:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
    if (!limited.ok) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(limited.retryAfterSec) },
        },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const payload = await request.json();
    const name = asTrimmedString(payload.name, MAX_NAME);
    const subject = asTrimmedString(payload.subject, MAX_SUBJECT);
    const body = asTrimmedString(payload.body, MAX_BODY);

    if (!name || !subject || !body) {
      return Response.json({ error: "Invalid form data" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Gus Cornejo <noreply@mail.guscornejo.com>",
      to: "gus.cornejo@icloud.com",
      subject: subject,
      html: `<div>
        <h1>${escapeHtml(name)}</h1>
        <p>${escapeHtml(body).replaceAll("\n", "<br />")}</p>
      </div>`,
    });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
