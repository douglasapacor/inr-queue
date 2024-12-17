import RegisterService from "../services/Register"
import { defaultResponse } from "../types"

export default class RegisterController {
  constructor(private service: RegisterService) {}

  async Add(params: { name: string; payload: any }): Promise<defaultResponse> {
    try {
      await this.service.Add(params)
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
