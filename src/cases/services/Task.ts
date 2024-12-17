import TaskRepository from "../repositories/Task"
import { createTaskServiceProps } from "../schemas/createTask"
import { taskIdServiceProps } from "../schemas/taskId"
import { defaultResponse } from "../types"

export default class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  public async createTask(
    params: createTaskServiceProps
  ): Promise<defaultResponse> {
    try {
      const taskResponse = await this.taskRepository.saveTask({
        taskName: params.taskName,
        retries: params.retries,
        maxRetries: params.maxRetries,
        payload: JSON.stringify(params.payload),
        priority: params.priority
      })

      return {
        success: true,
        data: taskResponse,
        message: `Tarefa ${params.taskName} adicionada com sucesso.`
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  public async completeTask(
    params: taskIdServiceProps
  ): Promise<defaultResponse> {
    try {
      await this.taskRepository.completeTask(params.id)
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

  public async incrementTask(
    params: taskIdServiceProps
  ): Promise<defaultResponse> {
    try {
      await this.taskRepository.incrementRetries(params.id)
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
