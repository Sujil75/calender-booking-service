const express = require('express')
const authenticator = require('./middlewares/authenticator')
const UserRoute = require('./modules/user/routes/UserRoute')

const app = express()

app.use(express.json())

app.use('/users', UserRoute)

app.use(authenticator)

module.exports = app