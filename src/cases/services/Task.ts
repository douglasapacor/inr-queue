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
        priority: params.priority
      })

      return {
        success: true,
        message: `Tarefa ${params.taskName} adicionada com sucesso.`,
        data: {
          id: taskResponse.add_task,
          taskName: params.taskName,
          priority: params.priority,
          retries: params.retries,
          maxRetries: params.maxRetries
        }
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
      await this.taskRepository.completeTask({ taskId: params.id })

      return {
        success: true,
        message: "Tarefa concluida."
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
      await this.taskRepository.incrementRetries({ taskId: params.id })

      return {
        success: true,
        message: "Tarefa incrementada."
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
