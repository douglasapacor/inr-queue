import { SentMessageInfo } from "nodemailer"
import {
  epicquesttiTransporter,
  publicacoesInrTransporter
} from "./transporters"

export async function sendEpicquesttiEmail(
  from: string,
  to: string,
  subject: string,
  htmlContent: string
): Promise<SentMessageInfo> {
  return await epicquesttiTransporter.sendMail({
    from: `${from}@epicquestti.com.br`,
    to,
    subject,
    html: htmlContent
  })
}

export async function sendPublicacoesInrEmail(
  from: string,
  to: string,
  subject: string,
  htmlContent: string
): Promise<SentMessageInfo> {
  return await publicacoesInrTransporter.sendMail({
    from: `${from}@publicacoesinr.com.br`,
    to,
    subject,
    html: htmlContent
  })
}
