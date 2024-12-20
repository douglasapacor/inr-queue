import { z } from "zod"

export const deviceUserIdValidation = z.object({
  userId: z.string()
})

export type deviceUserIdControllerProps = z.input<typeof deviceUserIdValidation>
export type deviceUserIdServiceProps = z.output<typeof deviceUserIdValidation>
