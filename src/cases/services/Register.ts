import queue from "../../queue"
import { defaultResponse } from "../types"

export default class RegisterService {
  async Add(params: { name: string; payload: any }): Promise<defaultResponse> {
    try {
      queue.add(params.name, params.payload)

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
