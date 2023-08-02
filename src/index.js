const app = require("./app")

const PORT = process.env.PORT || 3000

const start = () => {
    app.listen()
    try {
        app.listen({port: PORT}) 
        app.log.info(`server listening on ${PORT}`)
     } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()