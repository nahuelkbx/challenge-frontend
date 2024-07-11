const express = require('express')

const itemController = require('../controllers/controller')

var router = express.Router()

router.get('/items', (req,res)=> {
    itemController.Get(req, res, next)
})

router.get('/items/:id', (req,res)=> {
    itemController.GetDetail(req, res, next)
})

module.exports = router