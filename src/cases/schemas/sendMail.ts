import { z } from "zod"
export const sendMailValidation = z.object({
  domain: z.enum(["publicacoesinr", "epicquestti"]),
  from: z.string(),
  to: z.string(),
  subject: z.string(),
  htmlContent: z.string()
})

export type sendMailControllerProps = z.input<typeof sendMailValidation>
export type sendMailServiceProps = z.output<typeof sendMailValidation>
