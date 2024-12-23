import { platform } from "os"
import { DeviceRepository } from "../repositories/Device"
import { deviceUserIdServiceProps } from "../schemas/deviceUserId"
import { registerDeviceServiceProps } from "../schemas/registerDevice"
import { defaultResponse } from "../types"

export class DeviceService {
  constructor(private repository: DeviceRepository) {}

  async register(params: registerDeviceServiceProps): Promise<defaultResponse> {
    try {
      const response = await this.repository.register({
        userId: params.userId,
        token: params.token,
        platform: params.platform
      })

      return {
        success: true,
        data: {
          id: response.register_device,
          userId: params.userId,
          token: params.token,
          platform: params.platform
        }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async unregister(params: deviceUserIdServiceProps): Promise<defaultResponse> {
    try {
      await this.repository.unregister({
        userId: params.userId
      })

      return {
        success: true,
        message: "Dispositivo descadastrado com sucesso."
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
