"use server";
import * as sgMail from "@sendgrid/mail";

export const handleSendEmail = async (data: FormData) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const firstName = data.get("firstName") as string;
  const message = data.get("message") as string;
  const company = data.get("company") as string;
  const tel = data.get("tel") as string;
  const email = data.get("email") as string;
  const msg = {
    to: "people@notion.business",
    from: "admin@notion.business",
    subject: `${firstName} from ${company} tried reaching`,
    //   text: "and easy to do anywhere, even with Node.js",
    html: `<div>
                <p>Hi I am ${firstName} from ${company} I would like to discuss on following:</p>
                <p>${message}</p><p>You can reach out to me :</p>
                <p>phone: ${tel}</p>
                <p>Email: ${email}</p>
            </div>`,
  };
  try {
    const response = await sgMail.send(msg);
    if (response) return { status: "ok" };
    return { status: "" };
  } catch (err) {
    console.log(err);
    return { status: "" };
  }
};
