import express, { Request, Response } from "express"
import TrackingController from "../cases/controllers/Tracking"
import TrackingService from "../cases/services/Tracking"
const trackingRoute = express.Router()

const service = new TrackingService()
const controller = new TrackingController(service)

trackingRoute.get("open/:mailId", async (req: Request, res: Response) => {
  await controller.mail({
    emailId: +req.params.mailId,
    device: req.headers["user-agent"],
    location: req.ip
  })

  res.setHeader("Content-Type", "image/png")
  res.send(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
})

export default trackingRoute
