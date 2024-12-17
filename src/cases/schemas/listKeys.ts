import { z } from "zod"
export const listKeyValidation = z.object({
  name: z.string(),
  active: z.boolean(),
  limit: z.number(),
  page: z.number()
})

export type listKeyControllerProps = z.input<typeof listKeyValidation>
export type listKeyServiceProps = z.output<typeof listKeyValidation>
