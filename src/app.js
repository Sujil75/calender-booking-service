const express = require('express')
const authenticator = require('./middlewares/authenticator')
const UserRoute = require('./modules/user/routes/UserRoute')
const MeetingRoute = require('./modules/meeting/routes/MeetingRoute')

const app = express()

app.use(express.json())

app.use('/users', UserRoute)
app.use('/meetings', MeetingRoute)

app.use(authenticator)

module.exports = app