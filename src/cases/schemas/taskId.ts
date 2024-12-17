import { z } from "zod"

export const taskIdValidation = z.object({
  id: z.number()
})

export type taskIdControllerProps = z.input<typeof taskIdValidation>
export type taskIdServiceProps = z.output<typeof taskIdValidation>
