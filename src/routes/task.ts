import express, { Request, Response } from "express"
import wrapper from "../lib/wrapper"
import { defaultResponse } from "../cases/types"
const taskRoute = express.Router()

taskRoute.post(
  "/send-mail",
  wrapper({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json()
    },
    settings: {
      level: "free"
    }
  })
)

taskRoute.post(
  "/send-notification",
  wrapper({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json()
    },
    settings: {
      level: "free"
    }
  })
)

export default taskRoute
