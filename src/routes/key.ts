import express from "express"
import wrapper from "../lib/wrapper"
import KeyController from "../cases/controllers/Key"
import KeyService from "../cases/services/Key"
import KeyRepository from "../cases/repositories/Key"
const keysRoute = express.Router()
const repository = new KeyRepository()
const service = new KeyService(repository)
const controller = new KeyController(service)

keysRoute.post(
  "/new",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await controller.create({
          name: req.body.name ? req.body.name : "",
          active: req.body.active
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

keysRoute.delete(
  "/:id/delete",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await controller.delete({
          keyId: +req.params.id
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

keysRoute.put(
  "/:id/inactive",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await controller.inactive({
          id: +req.params.id
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

keysRoute.put(
  "/:id/active",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await controller.active({
          id: +req.params.id
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

keysRoute.post(
  "/",
  wrapper({
    handle: async (req, res) => {
      res.status(200).json(
        await controller.list({
          name: req.body.name ? req.body.name : "",
          active: req.body.active,
          limit: req.body.limit,
          page: req.body.page
        })
      )
    },
    settings: {
      level: "free"
    }
  })
)

export default keysRoute
