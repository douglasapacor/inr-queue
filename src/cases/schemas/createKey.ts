import { z } from "zod"
export const createKeyValidation = z.object({
  name: z.string(),
  active: z.boolean()
})

export type createKeyControllerProps = z.input<typeof createKeyValidation>
export type createKeyServiceProps = z.output<typeof createKeyValidation>
