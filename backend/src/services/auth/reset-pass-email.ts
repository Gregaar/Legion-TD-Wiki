import config from "config";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer-smtp-transport";

export default async (
  userName: string,
  userEmail: string,
  resetLink: string,
): Promise<void> => {
  let transporter;

  if (process.env.NODE === "production") {
    transporter = nodemailer.createTransport(
      SMTPTransport({
        host: config.get("email.host"),
        port: 587,
        secure: false,
        auth: {
          user: config.get("email.user"),
          pass: config.get("email.password"),
        },
      }),
    );
  } else {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport(
      SMTPTransport({
        host: config.get("email.host"),
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
    );
  }

  const messageOptions = {
    from: config.get("email.user") as string,
    to: userEmail,
    subject: "Password Reset",
    text: `Hi ${userName},\n\nPlease use the link below to reset your password for the Legion TD Wiki.\n\n${resetLink}\n\nRegards,\n\nLegion-TD Wiki Support`,
  };

  transporter.sendMail(messageOptions, (error, info) => {
    if (error) {
      return error;
    }
    console.log("Message Sent", info);
  });
};

// TODO: add env variables
