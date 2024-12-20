import queue from "../../queue"
import { sendMailServiceProps } from "../schemas/sendMail"
import { sendNotificationServiceProps } from "../schemas/sendNotification"
import { defaultResponse } from "../types"

export default class QueueService {
  async sendMail(params: sendMailServiceProps): Promise<defaultResponse> {
    try {
      switch (params.domain) {
        case "publicacoesinr":
          queue.add("send_mail_publicacoesinr", {
            from: params.from,
            to: params.to,
            subject: params.subject,
            htmlContent: params.htmlContent
          })
          break
        case "epicquestti":
          queue.add("send_mail_epicquestti", {
            from: params.from,
            to: params.to,
            subject: params.subject,
            htmlContent: params.htmlContent
          })
          break
        default:
          throw new Error("Domínio inexistente.")
      }

      return {
        success: true,
        message: "Tarefa inserida a fila com sucesso."
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async sendNotification(
    params: sendNotificationServiceProps
  ): Promise<defaultResponse> {
    try {
      queue.add("send_notification", params)

      return {
        success: true,
        message: "Tarefa inserida a fila com sucesso."
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
