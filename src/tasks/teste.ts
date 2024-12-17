export default {
  name: "teste",
  priority: 1,
  retries: 0,
  maxRetries: 3,
  handle: async (payload: any) => {
    console.log("Inicio do teste.")
    console.log(`payload: ${payload}`)

    setTimeout(() => {
      console.log("Fim do teste.")
    }, 5000)
  }
}
