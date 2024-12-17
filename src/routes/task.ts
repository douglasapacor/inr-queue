import express from "express"
import RegisterController from "../cases/controllers/Register"
import RegisterService from "../cases/services/Register"
import queueWrapper from "../lib/queueWrapper"
const taskRoute = express.Router()

const service = new RegisterService()
const controller = new RegisterController(service)

taskRoute.post(
  "/add",
  queueWrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await controller.Add({
          name: req.query.name ? req.query.name.toString() : "",
          payload: req.body.payload
        })
      )
    }
  })
)

export default taskRoute
