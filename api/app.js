const express = require('express')
const api = require('./routes/routes')
const errorHandler = require('./middlewares/ErrorHandler')

require('dotenv').config()
const morgan = require('morgan')


const app = express()
const port = process.env.PORT


// Middleware for better logs
app.use(morgan('dev'))
app.use(errorHandler)

app.use('/api', api)

app.listen(port, ()=> {
    console.log(`api running on port ${port}`)
})
