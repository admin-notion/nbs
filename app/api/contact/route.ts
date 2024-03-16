import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const res = await resend.emails.send({
      from: "people@notion.business",
      to: "shankarks311@gmail.com",
      subject: "Hello from Next.js",
      html: "<h1> Hello from Next.js</h1>",
    });
    return NextResponse.json({ data: res.data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
