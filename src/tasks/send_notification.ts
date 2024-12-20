import admin from "../lib/firebase"
import { message, taskDefault } from "./types"

export default {
  name: "send_notification",
  priority: 2,
  retries: 0,
  maxRetries: 3,
  handle: async payload => {
    await admin.messaging().send(payload)
  }
} as taskDefault<message>
