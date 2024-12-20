import SMTPTransport from "nodemailer/lib/smtp-transport"

export default {
  host: process.env.MAIL_HOST || "",
  port: process.env.MAIL_PORT ? +process.env.MAIL_PORT : 0,
  secure: process.env.MAIL_SECURE,
  tls: {
    rejectUnauthorized: process.env.MAIL_TLS_REJECTUNAUTHORIZED
  }
} as SMTPTransport | SMTPTransport.Options
