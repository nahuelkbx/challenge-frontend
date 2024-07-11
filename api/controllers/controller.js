const ItemService = require('../services/service')

class ControllerItem {
    static async Get(req, res, next) {
        try {
            let response = await ItemService.Get(req)
            res.json(response)
        } catch (error) {
            next(error)
        }

    }

    static async GetDetail(req, res, next) {
        try {
            let response = await ItemService.GetDetail(req)
            res.json(response)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerItem