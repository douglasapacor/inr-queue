import { z } from "zod"
export const simpleIdValidation = z.object({
  id: z.number()
})

export type simpleIdControllerProps = z.input<typeof simpleIdValidation>
export type simpleIdServiceProps = z.output<typeof simpleIdValidation>
