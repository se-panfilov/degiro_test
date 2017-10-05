//Task1
const products = [
    {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1},
    {id: 4, price: 3}, {id: 5, price: 1}, {id: 6, price: 8},
    {id: 7, price: 3}, {id: 8, price: 0}, {id: 9, price: 4},
    {id: 10, price: 5}, {id: 11, price: 9}, {id: 12, price: 13},
]

/**
 * @params [Array] products - list of products
 * @params [Number] options.size - Optional parameter. By default it should be 5
 **/
function sortProducts (products = [], options = {}) {
    const size = (options.size || options.size === 0) ? +options.size : 5
    if (size === 0) return {highest: null, lowest: null}

    const sortedProducts = products.concat([])
    sortedProducts.sort((a, b) => {
        return a.price - b.price
    })

    return {
        highest: sortedProducts.slice(sortedProducts.length - size),
        lowest: sortedProducts.slice(0, size)
    }

}

// const result = sortProducts(products) // {highest: [...], lowest: [...]}
// console.info(result)

module.exports = sortProducts