import express, { Request, Response } from "express"
import applicationTunnel from "../lib/applicationTunnel"
import { defaultResponse } from "../cases/types"
const tunnelRoute = express.Router()

tunnelRoute.post(
  "/send-mail",
  applicationTunnel({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json()
    }
  })
)

tunnelRoute.post(
  "/send-notification",
  applicationTunnel({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json()
    }
  })
)

export default tunnelRoute
