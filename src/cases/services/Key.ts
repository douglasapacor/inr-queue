import { sign } from "jsonwebtoken"
import { generateKey } from "../../lib/helpers/randoms"
import KeyRepository from "../repositories/Key"
import { createKeyServiceProps } from "../schemas/createKey"
import { deleteKeyServiceProps } from "../schemas/deleteKey"
import { simpleIdServiceProps } from "../schemas/simpleId"
import { defaultResponse } from "../types"
import application from "../../config/application"
import { listKeyServiceProps } from "../schemas/listKeys"

export default class KeyService {
  constructor(private repository: KeyRepository) {}

  async create(params: createKeyServiceProps): Promise<defaultResponse> {
    try {
      const pId = generateKey(50)
      const serversideKey = generateKey(20)

      const createdKey = await this.repository.create({
        pId: pId,
        name: params.name,
        active: params.active,
        key: serversideKey
      })

      const frontsideKey = generateKey(20)

      const serverkeyId = {
        id: createdKey.id
      }

      const serversideContent = sign(
        JSON.stringify(serverkeyId),
        `${serversideKey}${frontsideKey}`
      )

      const frontsideContent = {
        pId: createdKey.pId,
        frontsideKey,
        content: serversideContent
      }

      const key = sign(JSON.stringify(frontsideContent), application.key)

      return {
        success: true,
        data: key,
        message: "chave criada com sucesso."
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async delete(params: deleteKeyServiceProps): Promise<defaultResponse> {
    try {
      await this.repository.delete(params.keyId)

      return {
        success: true,
        message: `Chave excluida com sucesso.`
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async inactive(params: simpleIdServiceProps): Promise<defaultResponse> {
    try {
      await this.repository.inactive(params.id)

      return {
        success: true,
        message: `Chave inativada com sucesso.`
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async active(params: simpleIdServiceProps): Promise<defaultResponse> {
    try {
      await this.repository.active(params.id)

      return {
        success: true,
        message: `Chave inativada com sucesso.`
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async list(params: listKeyServiceProps): Promise<defaultResponse> {
    try {
      const list = await this.repository.list(params)
      const count = await this.repository.count({
        name: params.name,
        active: params.active
      })

      return {
        success: true,
        data: { list, count }
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
