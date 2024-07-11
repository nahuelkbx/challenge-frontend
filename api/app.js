const express = require('express')
require('dotenv').config()


const routes = require('./routes/routes')
const errorHandler = require('./middlewares/error_handler')
const morgan = require('morgan')


const app = express()
const port = process.env.PORT


// Middleware for better logs
app.use(morgan('dev'))
app.use(errorHandler)

app.use('/api', routes)

app.listen(port, ()=> {
    console.log(`api running on port ${port}`)
})
