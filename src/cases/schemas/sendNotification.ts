import { z } from "zod"
export const sendNotificationValidation = z.object({
  notification: z.object({
    title: z.string(),
    body: z.string(),
    imageUrl: z.string().optional()
  }),
  token: z.string()
})

export type sendNotificationControllerProps = z.input<
  typeof sendNotificationValidation
>
export type sendNotificationServiceProps = z.output<
  typeof sendNotificationValidation
>
