// Task1
const products = [
    {id: 1, price: 10},
    {id: 2, price: 11},
    {id: 3, price: 1},
    {id: 4, price: 2},
    {id: 5, price: 100},
    {id: 6, price: 0.1}
]

function compareArrays (a, b) {
    return a.map(JSON.stringify).join(',') === b.map(JSON.stringify).join(',')
}

let memoizedProducts = []

/**
 * @params [Array] products - list of products
 * @params [Number] options.size - Optional parameter. By default it should be 5
 **/
function sortProducts (products = [], options = {}) {

    if (memoizedProducts.length === 0) {
        memoizedProducts = products.concat([])
    } else {
        if (compareArrays(memoizedProducts, products)) return {highest: null, lowest: null}
    }

    function proceed (products = [], options = {}) {
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

    return proceed(products, options)

}

const result1 = sortProducts(products) // {highest: [...], lowest: [...]}
// console.info(result1)
//
// // call without modifications
// const result2 = sortProducts(products) // {highest: null, lowest: null}
// console.info(result2)
//
// // call with modified data
// products[1] = {id: 2, price: 11.5}
// const result3 = sortProducts(products) // {highest: [...], lowest: [...]}
// console.info(result3)
//
// // call without modifications
// const result4 = sortProducts(products) // {highest: null, lowest: null}
// console.info(result4)
// products.push({...})
//
// // call with modified data
// const result5 = sortProducts(products) // {highest: [...], lowest: [...]}
// console.info(result5)

