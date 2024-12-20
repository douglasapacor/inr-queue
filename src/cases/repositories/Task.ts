import { Repository } from "../types"

export default class TaskRepository extends Repository {
  public async saveTask(params: {
    taskName: string
    retries: number
    priority: number
    maxRetries: number
  }): Promise<{
    add_task: number
  }> {
    try {
      return await this.call<{ add_task: number }>(
        "add_task",
        params.taskName,
        params.retries,
        params.priority,
        params.maxRetries
      )
    } catch (error: any) {
      throw new Error(`TaskRepository -:${error.message}`)
    }
  }

  public async completeTask(params: { taskId: number }): Promise<{
    complete_task: number
  }> {
    try {
      return await this.call<{ complete_task: number }>(
        "complete_task",
        params.taskId
      )
    } catch (error: any) {
      throw new Error(`TaskRepository -:${error.message}`)
    }
  }

  public async incrementRetries(params: {
    taskId: number
  }): Promise<{ increment_task: number }> {
    try {
      return await this.call<{ increment_task: number }>(
        "increment_task",
        params.taskId
      )
    } catch (error: any) {
      throw new Error(`TaskRepository -:${error.message}`)
    }
  }
}
