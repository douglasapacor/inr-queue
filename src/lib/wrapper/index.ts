import type { Request, Response } from "express"
import { verify } from "jsonwebtoken"
import type { attributes } from "./types"
import application from "../../config/application"
export default function wrapper(attr: attributes) {
  return async (req: Request, res: Response): Promise<void> => {
    try {
      res.on("finish", () => {
        req.meta.finish = new Date().getMilliseconds()

        console.log(
          `"${req.baseUrl}${req.path}" | ${req.meta.method} | ${
            (req.meta.finish - req.meta.start) / 1000
          } second(s)`
        )
      })

      if (!req.headers["inr-queue-key"]) throw new Error("Não autorizado")

      const credential: any = verify(
        `${req.headers["inr-queue-key"]}`,
        application.key
      )

      if (!credential) throw new Error("Não autorizado")

      return await attr.handle(req, res)
    } catch (error: any) {
      res.status(200).json({
        success: false,
        message: error.message
      })
    }
  }
}
