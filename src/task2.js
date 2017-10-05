// Task1
const products = [
    {id: 1, price: 10},
    {id: 2, price: 11},
    {id: 3, price: 1}
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

    const lowest = (size < products.length) ? sortedProducts.slice(0, size) : null
    const highest = (size <= products.length) ? sortedProducts.slice(sortedProducts.length - size) : null

    return {highest, lowest}
}

// const result1 = sortProducts(products, {size: 4}) // {highest: null, lowest: null}
// console.info('----RESULT1----')
// console.info(result1)
//
// const result2 = sortProducts(products, {size: 3}) // {highest: [...], lowest: [null}
// console.info('----RESULT2----')
// console.info(result2)
//
// const result3 = sortProducts(products, {size: 2}) // {highest: [...], lowest: [...]}
// console.info('----RESULT3----')
// console.info(result3)
//
// const result4 = sortProducts(products, {size: 1}) // {highest: [...], lowest: [...]}
// console.info('----RESULT4----')
// console.info(result4)
//
// const result5 = sortProducts(products, {size: 0}) // {highest: null, lowest: null}
// console.info('----RESULT5----')
// console.info(result5)

module.exports = sortProducts