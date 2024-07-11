const ItemService = require('../services/service')

class ControllerItem {
    static async Get(req, res) {
        try {
            let response = await ItemService.Get(req)
            res.json(response)
        } catch (error) {
            res.json({ 'message': error })
        }

    }

    static async GetDetail(req, res) {
        try {
            let response = await ItemService.GetDetail(req)
            res.json(response)
        } catch (error) {
            res.json({ 'message': error })
        }
    }
}

module.exports = ControllerItem