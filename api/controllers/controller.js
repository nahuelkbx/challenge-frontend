const ItemService = require('../services/itemService')

class ControllerItem {
    static async Get(req, res) {
        try {
            let response = await ItemService.Get(req)
            res.json(response)
        } catch (error) {
            res.json(error)
        }

    }

    static async GetDetail(req, res) {
        try {
            let response = await ItemService.GetDetail(req)
            res.json(response)
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = ControllerItem