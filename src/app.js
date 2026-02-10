const express = require('express')
const {authenticator} = require('./middlewares/authenticator')

const app = express()

app.use(express.json())

app.use(authenticator)

module.exports = app