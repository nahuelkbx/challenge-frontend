const axios = require('axios')

const MELI_HOST = process.env.MELI_HOST

class ItemService {
    static async Get(req) {
        let items = await axios.get(`${MELI_HOST}/sites/MLA/search?q=${req.query.q}`)

        const response = {
            author: {
                name: 'Nahuel',
                lastname: 'Monserrat'
            },
            categories: this.getCategories(items.data.filters),
            items: this.limitItems(items.data.results, 4),
        }

        return response
    }

    static async GetDetail(req) {
        const [item, description] = await Promise.all([
            axios.get(`${MELI_HOST}/items/${req.params.id}`),
            axios.get(`${MELI_HOST}/items/${req.params.id}/description`)
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
                sold_quantity: '', // To-do: Ver de donde sacar la sold_quantity
                description: description.data.plain_text
            }
        }
    }

    static getCategories(filters) {
        let categories = filters.find((filter) => filter.id === 'category')

        let response = categories.values[0].path_from_root.map((category) => {

            return {
                category: categories.values[0].name,
                path: category.name
            }
        })

        return response
    }

    static limitItems(items, limit) {
        let response = []
        items.forEach((item, index) => {
            if (index < limit) {
                response.push(item)
            }
        })

        return response
    }

}

module.exports = ItemService