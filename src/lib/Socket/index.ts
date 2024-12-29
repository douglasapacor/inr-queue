import { Server, Socket } from "socket.io"

export default class SocketIO {
  private io: Server

  constructor(server: any) {
    this.io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    })

    this.initialize()
  }

  private initialize(): void {
    this.io.on("connection", (socket: Socket) => {
      console.log(`Novo cliente conectado: ${socket.id}`)
      this.registerEvents(socket)
    })
  }

  private registerEvents(socket: Socket): void {
    socket.on("sendNotification", (data: any) => {
      console.log("Notificação recebida:", data)
    })

    socket.on("disconnect", () => {
      console.log(`Cliente desconectado: ${socket.id}`)
    })
  }
}
