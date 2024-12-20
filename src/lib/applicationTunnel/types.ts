import type { Request, Response } from "express"
import type { defaultResponse } from "../../cases/types"
export type settingsLevel = "free" | "controlled" | "full"

export type attributes = {
  handle: (req: Request, res: Response<defaultResponse>) => Promise<void>
}
