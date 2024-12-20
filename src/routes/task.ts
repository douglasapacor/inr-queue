import express, { Request, Response } from "express"
import wrapper from "../lib/wrapper"
import { defaultResponse } from "../cases/types"
import QueueController from "../cases/controllers/Queue"
import QueueService from "../cases/services/QueueService"
const taskRoute = express.Router()

const service = new QueueService()
const controller = new QueueController(service)

taskRoute.post(
  "/send-mail",
  wrapper({
    handle: async (req: Request, res: Response<defaultResponse>) => {
      res.status(200).json(
        await controller.sendMail({
          domain: req.body.domain,
          from: req.body.from,
          to: req.body.to,
          subject: req.body.subject,
          htmlContent: req.body.htmlContent
        })
      )
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
      res.status(200).json(
        await controller.sendNotification({
          notification: {
            body: req.body.body,
            title: req.body.title,
            imageUrl: req.body.imageUrl
          },
          token: req.body.token
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

export default taskRoute
