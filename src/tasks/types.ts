export type taskDefault<payload = any> = {
  name: string
  priority: number
  retries: number
  maxRetries: number
  handle: (payload: payload) => Promise<void>
}

export type notification = {
  title: string
  body: string
  imageUrl?: string
}

export type message = {
  notification: notification
  token: string
}

export type sendMail = {
  from: string
  to: string
  subject: string
  htmlContent: string
}
