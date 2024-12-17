export type defaultResponse = {
  success: boolean
  data?: any
  message?: string
}

export type createTask = {
  taskName: string
  payload: any
  priority: number
  retries: number
  maxRetries: number
}

export type Task = {
  id: number
  taskName: string
  payload: any
  priority: number
  retries: number
  maxRetries: number
  createdAt: Date
}

export class Provider {}
