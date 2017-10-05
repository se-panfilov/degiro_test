const sortProducts = require('../src/task2')

test('Happy path', () => {

    const products = [
        {id: 1, price: 10}, {id: 2, price: 11}, {id: 3, price: 1},
        {id: 4, price: 3}, {id: 5, price: 1}, {id: 6, price: 8},
        {id: 7, price: 3}, {id: 8, price: 0}, {id: 9, price: 4},
        {id: 10, price: 5}, {id: 11, price: 9}, {id: 12, price: 13},
    ]


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
            {id: 4, price: 3}
        ]
    }

    const result = sortProducts(products)
    expect(result).toEqual(expectedResult)
})


describe('size checks', () => {
    const products = [
        {id: 1, price: 10},
        {id: 2, price: 11},
        {id: 3, price: 1}
    ]

    test('Should return nulls when size is bigger then arr length', () => {
        const expectedResult = {
            highest: null,
            lowest: null
        }

        const result = sortProducts(products, {size: 4})
        expect(result).toEqual(expectedResult)
    })

    test('Should return only highest when size is equal to arr length', () => {
        const expectedResult = {
            highest: [
                {id: 3, price: 1},
                {id: 1, price: 10},
                {id: 2, price: 11}
            ],
            lowest: null
        }

        const result = sortProducts(products, {size: 3})
        expect(result).toEqual(expectedResult)
    })

    test('Should return only highest and lowest when size is lower then arr length', () => {
        const expectedResult = {
            highest: [
                {id: 1, price: 10},
                {id: 2, price: 11}
            ],
            lowest: [
                {id: 3, price: 1},
                {id: 1, price: 10}
            ]
        }

        const result = sortProducts(products, {size: 2})
        expect(result).toEqual(expectedResult)
    })

    test('zero size check', () => {
        const expectedResult = {
            highest: null,
            lowest: null
        }

        const result = sortProducts(products, {size: 0})
        expect(result).toEqual(expectedResult)
    })

    test('check if size is string', () => {
        const expectedResult = {
            highest: [
                {id: 1, price: 10},
                {id: 2, price: 11}
            ],
            lowest: [
                {id: 3, price: 1},
                {id: 1, price: 10}
            ]
        }

        const result = sortProducts(products, {size: '2'})
        expect(result).toEqual(expectedResult)
    })
})
