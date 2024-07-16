const express = require('express')

const itemController = require('../controllers/controller')

var router = express.Router()

router.get('/items', async (req, res, next) => {
    try {
        await itemController.Get(req, res, next)
    } catch (error) {
        next(error)
    }

})

router.get('/items/:id', async (req, res, next) => {
    try {
        await itemController.GetDetail(req, res, next)

    } catch (error) {
        next(error)
    }
})

module.exports = router
