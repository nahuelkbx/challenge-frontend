const axios = require('axios')
const {getCategories, limitItems} = require('../utils/utils')

class ItemService {
    static async Get(req) {
        let items = await axios.get(`${process.env.MELI_HOST}/sites/MLA/search?q=${req.query.search}`)

        const response = {
            author: {
                name: 'Nahuel', 
                lastname: 'Monserrat'
            },
            categories: getCategories(items.data.filters),
            items: limitItems(items.data.results, 4),
        }

        return response
    }

    static async GetDetail(req){
        const [item, description] = await Promise.all([
            axios.get(`${process.env.MELI_HOST}/items/${req.params.id}`),
            axios.get(`${process.env.MELI_HOST}/items/${req.params.id}/description`)
        ])
        
        return {
            author: {
                name: 'Nahuel',
                lastname: 'Monserrat'
            },
            item: {
                id: item.data.id,
                title: item.data.title,
                price: {
                    currency: item.data.currency,
                    amount: item.data.price,
                    decimals: item.data.base_price
                },
                picture: item.data.thumbnail,
                condition: item.data.condition,
                free_shiping: item.shipping.free_shiping,
                sold_quantity: '',
                description: description.data.plain_text
            }
        }
    }
}

module.exports = ItemService