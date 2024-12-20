import {
  simpleIdControllerProps,
  simpleIdValidation
} from "../schemas/simpleId"
import {
  trackingMailControllerProps,
  trackingMailValidation
} from "../schemas/trackingMail"
import TrackingService from "../services/Tracking"
import { defaultResponse } from "../types"

export default class TrackingController {
  constructor(private service: TrackingService) {}

  async mail(params: trackingMailControllerProps): Promise<defaultResponse> {
    try {
      const validation = await trackingMailValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.mail(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
