export type Task = {
  id: number
  name: string
  retries: number
  priority: number
  maxRetries: number
  payload: any
}
