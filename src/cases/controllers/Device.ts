import {
  deviceUserIdControllerProps,
  deviceUserIdValidation
} from "../schemas/deviceUserId"
import {
  registerDeviceControllerProps,
  registerDeviceValidation
} from "../schemas/registerDevice"
import { DeviceService } from "../services/Device"
import { defaultResponse } from "../types"

export class DeviceController {
  constructor(private service: DeviceService) {}

  async register(
    params: registerDeviceControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await registerDeviceValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.register(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async unregister(
    params: deviceUserIdControllerProps
  ): Promise<defaultResponse> {
    try {
      const validation = await deviceUserIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.unregister(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
