import { z } from "zod"
export const trackingMailValidation = z.object({
  emailId: z.number(),
  device: z.string().optional(),
  location: z.string().optional()
})

export type trackingMailControllerProps = z.input<typeof trackingMailValidation>
export type trackingMailServiceProps = z.output<typeof trackingMailValidation>
