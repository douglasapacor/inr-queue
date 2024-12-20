import { Repository } from "../types"

export class DeviceRepository extends Repository {
  async register(params: {
    userId: string
    platform: "web" | "mobile" | "desktop"
    token: string
  }): Promise<{
    register_device: number
  }> {
    try {
      return await this.call<{ register_device: number }>(
        "register_device",
        params.userId,
        params.platform,
        params.token
      )
    } catch (error: any) {
      throw new Error(`device: ${error.message}`)
    }
  }

  async unregister(params: {
    userId: string
  }): Promise<{ unregister_device: number }> {
    try {
      return await this.call<{ unregister_device: number }>(
        "unregister_device",
        params.userId
      )
    } catch (error: any) {
      throw new Error(`device: ${error.message}`)
    }
  }
}
