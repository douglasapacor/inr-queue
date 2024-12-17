export default class KeyRepository {
  public async create(key: {
    name: string
    pId: string
    active: boolean
    key: string
  }): Promise<{
    id: number
    pId: string
    name: string
    key: string
  }> {
    try {
      return await databaseClient.keys.create({
        data: {
          name: key.name,
          pId: key.pId,
          active: key.active,
          key: key.key
        }
      })
    } catch (error: any) {
      throw new Error(`KeyRepository -:${error.message}`)
    }
  }

  public async delete(keyId: number): Promise<void> {
    try {
      await databaseClient.keys.delete({
        where: { id: keyId }
      })
    } catch (error: any) {
      throw new Error(`KeyRepository -:${error.message}`)
    }
  }

  public async inactive(keyId: number): Promise<void> {
    try {
      await databaseClient.keys.update({
        where: { id: keyId },
        data: {
          active: false
        }
      })
    } catch (error: any) {
      throw new Error(`KeyRepository -:${error.message}`)
    }
  }

  public async active(keyId: number): Promise<void> {
    try {
      await databaseClient.keys.update({
        where: { id: keyId },
        data: {
          active: true
        }
      })
    } catch (error: any) {
      throw new Error(`KeyRepository -:${error.message}`)
    }
  }

  public async list(params: {
    name: string
    active: boolean
    limit: number
    page: number
  }): Promise<
    {
      id: number
      pId: string
      name: string
      active: boolean
      key: string
    }[]
  > {
    try {
      return await databaseClient.keys.findMany({
        where: {
          name: {
            contains: params.name,
            mode: "insensitive"
          },
          active: params.active
        },
        take: params.limit,
        skip: params.page * params.limit
      })
    } catch (error: any) {
      throw new Error(`KeyRepository -:${error.message}`)
    }
  }

  public async count(params: {
    name: string
    active: boolean
  }): Promise<number> {
    try {
      return await databaseClient.keys.count({
        where: {
          name: {
            contains: params.name,
            mode: "insensitive"
          },
          active: params.active
        }
      })
    } catch (error: any) {
      throw new Error(`KeyRepository -:${error.message}`)
    }
  }
}
