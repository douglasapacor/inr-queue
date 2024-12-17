import { z } from "zod"
export const createTaskValidation = z.object({
  taskName: z.string(),
  payload: z.any(),
  priority: z.number(),
  retries: z.number(),
  maxRetries: z.number()
})

export type createTaskControllerProps = z.input<typeof createTaskValidation>
export type createTaskServiceProps = z.output<typeof createTaskValidation>
