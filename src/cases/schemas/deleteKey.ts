import { z } from "zod"
export const deleteKeyValidation = z.object({
  keyId: z.number()
})

export type deleteKeyControllerProps = z.input<typeof deleteKeyValidation>
export type deleteKeyServiceProps = z.output<typeof deleteKeyValidation>
