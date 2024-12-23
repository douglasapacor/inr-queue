import { z } from "zod"
export const registerDeviceValidation = z.object({
  userId: z.string(),
  token: z.string(),
  platform: z.enum(["web", "mobile", "desktop"])
})

export type registerDeviceControllerProps = z.input<
  typeof registerDeviceValidation
>
export type registerDeviceServiceProps = z.output<
  typeof registerDeviceValidation
>
