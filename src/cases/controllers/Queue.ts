import {
  sendMailControllerProps,
  sendMailValidation
} from "../schemas/sendMail"
import {
  sendNotificationControllerProps,
  sendNotificationValidation
} from "../schemas/sendNotification"
import QueueService from "../services/QueueService"
import { defaultResponse } from "../types"

export default class QueueController {
  constructor(private service: QueueService) {}

  async sendMail(params: sendMailControllerProps): Promise<defaultResponse> {
    try {
      const validation = await sendMailValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.sendMail(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async sendNotification(
    params: sendNotificationControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await sendNotificationValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.sendNotification(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
