import express from "express"
import keysRoute from "./routes/key"
import deviceRoute from "./routes/device"
import taskRoute from "./routes/task"
import tunnelRoute from "./routes/tunnel"
import trackingRoute from "./routes/tracking"
const router = express.Router()

router.use("/key", keysRoute)
router.use("/device", deviceRoute)
router.use("/task", taskRoute)
router.use("/tunnel", tunnelRoute)
router.use("/tracking", trackingRoute)

export default router
