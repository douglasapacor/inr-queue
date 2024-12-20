import { trackingMailServiceProps } from "../schemas/trackingMail"
import { defaultResponse } from "../types"

export default class TrackingService {
  async mail(params: trackingMailServiceProps): Promise<defaultResponse> {
    try {
      console.log(params)

      return {
        success: true
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
