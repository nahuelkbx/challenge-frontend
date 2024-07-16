const express = require('express')

require('dotenv').config()

const routes = require('./routes/routes')
const errorHandler = require('./middlewares/error_handler')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const port = process.env.PORT
const origin = process.env.ORIGIN_URL

const corsOptions = {
    AccessControlAllowOrigin: '*',
    origin: origin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}


// Middleware for better logs
app.use(morgan('dev'))
app.use(errorHandler)

// Allow request from origin property
app.use(cors(corsOptions))

app.use('/api', routes)

app.listen(port, () => {
    console.log(`api running on port ${port}`)
})
