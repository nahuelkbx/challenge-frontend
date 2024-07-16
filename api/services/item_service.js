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

        const categories = await axios.get(`${MELI_HOST}/categories/${item.data.category_id}`)

        return {
            author: {
                name: 'Nahuel',
                lastname: 'Monserrat'
            },
            item: {
                id: item.data.id,
                title: item.data.title,
                price: {
                    currency: item.data.currency_id,
                    amount: item.data.price,
                    decimals: this.getDecimals(item.data.price)
                },
                picture: item.data.pictures[0].url,
                condition: item.data.condition,
                free_shipping: item.data.shipping.free_shipping,
                sold_quantity: '',
                description: description.data.plain_text
            },
            categories: categories.data.path_from_root.map((category)=> ({ path: category.name}))
        }
    }

    static getDecimals(number){
        let transform = number.toString();

        let decimalIndex = transform.indexOf('.')

        if (decimalIndex === -1){
            return ""
        }

        return transform.substring(decimalIndex)
    }

    static getCategories(filters) {

        let categories = filters.find((filter) => filter.id === 'category')

        let response = categories.values[0].path_from_root.map((category) => {

            return {
                path: category.name
            }
        })

        return response
    }

    static limitItems(items, limit) {
        let response = []
        items.forEach((element, index) => {
            if (index < limit) {
                let item = {
                    id: element.id,
                    title: element.title,
                    price: {
                        currency: element.currency_id,
                        amount: element.price,
                        decimals: element.installments.amount
                    },
                    picture: element.thumbnail,
                    condition: element.condition,
                    free_shipping: element.shipping.free_shipping
                }

                response.push(item)
            }
        })

        return response
    }

}

module.exports = ItemService
