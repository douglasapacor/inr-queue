import express, { Request, Response } from "express"
import applicationTunnel from "../lib/applicationTunnel"
import { defaultResponse } from "../cases/types"
import QueueController from "../cases/controllers/Queue"
import QueueService from "../cases/services/QueueService"
const tunnelRoute = express.Router()

const service = new QueueService()
const controller = new QueueController(service)

tunnelRoute.post(
  "/send-mail",
  applicationTunnel({
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
    }
  })
)

tunnelRoute.post(
  "/send-notification",
  applicationTunnel({
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
    }
  })
)

export default tunnelRoute
