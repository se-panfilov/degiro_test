const sortProducts = require('../src/task1')

const products = [
    {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1},
    {id: 4, price: 3}, {id: 5, price: 1}, {id: 6, price: 8},
    {id: 7, price: 3}, {id: 8, price: 0}, {id: 9, price: 4},
    {id: 10, price: 5}, {id: 11, price: 9}, {id: 12, price: 13},
]

test('Happy path', () => {
    const expectedResult = {
        highest: [
            {id: 6, price: 8},
            {id: 11, price: 9},
            {id: 1, price: 10},
            {id: 2, price: 11},
            {id: 12, price: 13}],
        lowest: [
            {id: 8, price: 0},
            {id: 3, price: 1},
            {id: 5, price: 1},
            {id: 7, price: 3},
            {id: 4, price: 3}]
    }

    const result = sortProducts(products)
    expect(result).toEqual(expectedResult)
})
