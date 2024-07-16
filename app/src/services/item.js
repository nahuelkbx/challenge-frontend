import axios from 'axios'

const BACKEND_HOST = process.env.REACT_APP_API_URL;

export const getItems = (query) => {
    return axios.get(`${BACKEND_HOST}/api/items?q=${query}`).then((response) => {
        return {
            items: response.data.items,
            categories: response.data.categories
        }
    })
        .catch((error) => {
            throw (error)
        })

}

export const getDetail = (id) => {
    return axios.get(`${BACKEND_HOST}/api/items/${id}`)
        .then((response) => {
            return {
                detail: response.data.item,
                categories: response.data.categories
            }

        })
        .catch((error) => {
            throw (error)
        })
}
