require('dotenv').config()
const app = require('./app')
const { dbConnection } = require('./config/dbConnection')

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`)
    dbConnection()
})
