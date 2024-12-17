import TaskController from "./cases/controllers/Task"
import TaskRepository from "./cases/repositories/Task"
import TaskService from "./cases/services/Task"
import application from "./config/application"
import Queue from "./lib/Queue"

const repository = new TaskRepository()
const service = new TaskService(repository)
const controller = new TaskController(service)
const queue = new Queue(+application.concurrency, controller)

export default queue
