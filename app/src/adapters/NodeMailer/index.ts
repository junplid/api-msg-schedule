import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function NodeMailer(
  trans: SMTPTransport.Options,
  sender: Mail.Options
): Promise<boolean> {
  try {
    const transporter = createTransport(trans);
    await transporter.sendMail(sender);
    return true;
  } catch (error) {
    return false;
  }
}
