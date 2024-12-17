import { createTask } from "../types"
import databaseClient from "../../lib/dbClient/databaseClient"

export default class TaskRepository {
  public async saveTask(task: createTask): Promise<{
    id: number
    taskName: string
    payload?: string | null
    priority: number
    retries: number
    maxRetries: number
    createdAt: Date
  }> {
    try {
      return await databaseClient.task.create({
        data: {
          taskName: task.taskName,
          retries: task.retries,
          priority: task.priority,
          payload: task.payload,
          maxRetries: task.maxRetries,
          createdAt: new Date()
        }
      })
    } catch (error: any) {
      throw new Error(`TaskRepository -:${error.message}`)
    }
  }

  public async completeTask(taskId: number): Promise<void> {
    try {
      await databaseClient.task.delete({
        where: { id: taskId }
      })
    } catch (error: any) {
      throw new Error(`TaskRepository -:${error.message}`)
    }
  }

  public async incrementRetries(taskId: number): Promise<void> {
    try {
      await databaseClient.task.update({
        where: { id: taskId },
        data: { retries: { increment: 1 } }
      })
    } catch (error: any) {
      throw new Error(`TaskRepository -:${error.message}`)
    }
  }
}
