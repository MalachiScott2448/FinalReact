const express = require('express')
const router = express.Router()
const port = process.env.port || 3005

router.get('/api', (req, res)=> {
    res.json({
        'All Users': `http://localhost:${port}/api/users`,
        'All Menu': `http://localhost:${port}/api/menu`
    })
})

router.use('/api/users', require('./api/userRoutes'))
router.use('/api/menu', require('./api/menuRoutes'))

router.get('*', (req, res)=> {
    if (req.url === '/favicon.ico') {
        res.end()
    }
    else {
        res.send('<h1>404 Error. This page does not exist.</h1>')
    }
})

module.exports = router