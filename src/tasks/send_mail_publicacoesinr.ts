import { sendPublicacoesInrEmail } from "../lib/mail"
import { sendMail, taskDefault } from "./types"

export default {
  name: "send_mail_publicacoesinr",
  priority: 2,
  retries: 0,
  maxRetries: 3,
  handle: async payload => {
    await sendPublicacoesInrEmail(
      payload.from,
      payload.to,
      payload.subject,
      payload.htmlContent
    )
  }
} as taskDefault<sendMail>
