import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: true,
  auth: {
    user: "peterwebsitemail@gmail.com",
    pass: process.env.MAIL_PASS
  }
})
export async function sendMail(mail) {
  const info = await transporter.sendMail({
    from: `${mail.name} <${mail.email}>`,
    to: 'contact@peterkudelas.eu',
    subject: 'Contacted from website',
    html: `${mail.message}`
  })

  console.log("message sent:" + info.messageId)
  return info.messageId
}

