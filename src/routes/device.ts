import express, { Request, Response } from "express"
import { defaultResponse } from "../cases/types"
import wrapper from "../lib/wrapper"
import { DeviceController } from "../cases/controllers/Device"
import { DeviceService } from "../cases/services/Device"
import { DeviceRepository } from "../cases/repositories/Device"
const deviceRoute = express.Router()
const repository = new DeviceRepository()
const service = new DeviceService(repository)
const controller = new DeviceController(service)

deviceRoute.post(
  "/register",
  wrapper({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json(
        await controller.register({
          userId: req.body.userId,
          token: req.body.token,
          platform: req.body.platform
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

deviceRoute.post(
  "/unregister",
  wrapper({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json(
        await controller.unregister({
          userId: req.body.userId
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

export default deviceRoute
