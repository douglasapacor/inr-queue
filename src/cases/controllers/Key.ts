import {
  createKeyControllerProps,
  createKeyValidation
} from "../schemas/createKey"
import {
  deleteKeyControllerProps,
  deleteKeyValidation
} from "../schemas/deleteKey"
import { listKeyControllerProps, listKeyValidation } from "../schemas/listKeys"
import {
  simpleIdControllerProps,
  simpleIdValidation
} from "../schemas/simpleId"
import KeyService from "../services/Key"
import { defaultResponse } from "../types"

export default class KeyController {
  constructor(private service: KeyService) {}

  async create(params: createKeyControllerProps): Promise<defaultResponse> {
    try {
      const validation = await createKeyValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.create(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async delete(params: deleteKeyControllerProps): Promise<defaultResponse> {
    try {
      const validation = await deleteKeyValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.delete(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async inactive(params: simpleIdControllerProps): Promise<defaultResponse> {
    try {
      const validation = await simpleIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.inactive(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async active(params: simpleIdControllerProps): Promise<defaultResponse> {
    try {
      const validation = await simpleIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.active(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async list(params: listKeyControllerProps): Promise<defaultResponse> {
    try {
      const validation = await listKeyValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.service.list(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
