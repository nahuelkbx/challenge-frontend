
function getCategories(filters) {
    let categories = filters.find((filter)=> filter.id === 'category')
    
    let response = categories.values[0].path_from_root.map((category)=> {

        return {
            category: categories.values[0].name,
            path: category.name
        }
    })

    return response
}

function limitItems(items, limit){
    let response = []
    items.forEach((item, index)=> {
        if (index < limit){
            response.push(item)
        }
    })

    return response
}


module.exports = {
    getCategories,
    limitItems
}