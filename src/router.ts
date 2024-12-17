import express from "express"
import keysRoute from "./routes/key"
import taskRoute from "./routes/task"
const router = express.Router()

router.use("/key", keysRoute)
router.use("/task", taskRoute)

export default router
