const express = require('express')
const port = process.env.port || 3005

const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet()).use(cors())

server.use(express.json())
server.use(express.urlencoded({extended: true}))

const router = require('./app/routes/router')
server.use('/', router)
server.listen(port, ()=> 
    console.log(`You have entered zone ${port}`)
)