import {
  createTaskControllerProps,
  createTaskValidation
} from "../schemas/createTask"
import { taskIdControllerProps, taskIdValidation } from "../schemas/taskId"
import TaskService from "../services/Task"
import { defaultResponse } from "../types"

export default class TaskController {
  constructor(private taskService: TaskService) {}

  async create(params: createTaskControllerProps): Promise<defaultResponse> {
    try {
      const validation = await createTaskValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.taskService.createTask(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async complete(params: taskIdControllerProps): Promise<defaultResponse> {
    try {
      const validation = await taskIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.taskService.completeTask(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async increment(params: taskIdControllerProps): Promise<defaultResponse> {
    try {
      const validation = await taskIdValidation.safeParseAsync(params)

      if (!validation.success)
        throw new Error(validation.error.issues[0].message)

      return await this.taskService.incrementTask(validation.data)
    } catch (error: any) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}
