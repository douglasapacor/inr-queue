import TaskController from "../../cases/controllers/Task"
import * as tasklist from "../../tasks"
import { Task } from "./types"

export default class Queue {
  private tasks: Task[] = []
  private concurrency: number
  private currentWorkers: number = 0

  constructor(concurrency: number = 3, private controller: TaskController) {
    this.concurrency = concurrency
  }

  public async add(name: string, payload?: any): Promise<void> {
    try {
      const taskData = tasklist[name as keyof typeof tasklist]

      if (!taskData) throw new Error(`Erro ao registrar tarefa: ${name}`)

      const savedTask = await this.controller.create({
        taskName: taskData.name,
        retries: taskData.retries,
        priority: taskData.priority,
        maxRetries: taskData.maxRetries
      })

      if (!savedTask.success)
        throw new Error(`Erro ao registrar tarefa: ${name}`)

      this.tasks.push({
        id: savedTask.data.id,
        name: savedTask.data.taskName,
        priority: savedTask.data.priority,
        maxRetries: savedTask.data.maxRetries,
        retries: savedTask.data.retries,
        payload: payload
      })

      this.tasks.sort((a, b) => a.priority - b.priority)

      this.process()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  private async process(): Promise<void> {
    try {
      while (this.currentWorkers < this.concurrency && this.tasks.length > 0) {
        const task = this.tasks.shift()

        if (task) {
          this.currentWorkers++

          this.execute(task)
            .then(async () => {
              await this.controller.complete({ id: task.id })
            })
            .catch(async () => {
              if (task.retries < task.maxRetries) {
                const incrementResponse = await this.controller.increment({
                  id: task.id
                })

                if (!incrementResponse.success)
                  throw new Error("Erro ao incrementar tentativa.")

                this.tasks.push(task)
              } else {
                console.error(
                  `Tarefa ${task.name} falhou após ${task.maxRetries} tentativas.`
                )
              }
            })
            .finally(() => {
              this.currentWorkers--
              this.process()
            })
        }
      }
    } catch (error: any) {
      console.error(error.message)
    }
  }

  private async execute(task: Task): Promise<void> {
    await tasklist[task.name as keyof typeof tasklist].handle(task.payload)
  }

  public getSize(): number {
    return this.tasks.length
  }
}
