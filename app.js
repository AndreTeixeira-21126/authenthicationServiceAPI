const express = require('express')
const authRouter = require('./routers/auth.router')

function createApp() {
    
    const app = express()
    const authenthicationRouter = authRouter.buildRouter()
    app.use(express.json())
    app.use('/auth', authenthicationRouter)
    return app
}

module.exports = createApp
