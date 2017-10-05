const {sortProducts, compareArrays} = require('../src/task3')

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

describe('memoization checks', () => {
    const products = [
        {id: 1, price: 10},
        {id: 2, price: 11},
        {id: 3, price: 1},
        {id: 4, price: 2},
        {id: 5, price: 100},
        {id: 6, price: 0.1}
    ]

    test('should called once return highest and lowest', () => {
        const expectedResult = {
            highest: [
                {id: 3, price: 1},
                {id: 4, price: 2},
                {id: 1, price: 10},
                {id: 2, price: 11},
                {id: 5, price: 100}
            ],
            lowest: [
                {id: 6, price: 0.1},
                {id: 3, price: 1},
                {id: 4, price: 2},
                {id: 1, price: 10},
                {id: 2, price: 11}
            ]
        }

        const result = sortProducts(products)
        expect(result).toEqual(expectedResult)
    })

    test('should called without modifications return nulls', () => {
        const expectedResult = {
            highest: null,
            lowest: null
        }

        sortProducts(products)
        const result = sortProducts(products)
        expect(result).toEqual(expectedResult)
    })

    test('should called with modifications return highest and lowest', () => {
        const products = [
            {id: 1, price: 10},
            {id: 2, price: 11},
            {id: 3, price: 1},
            {id: 4, price: 2},
            {id: 5, price: 100},
            {id: 6, price: 0.1}
        ]

        const expectedResult = {
            highest: [{id: 3, price: 1},
                {id: 4, price: 2},
                {id: 1, price: 10},
                {id: 2, price: 11.5},
                {id: 5, price: 100}
            ],
            lowest: [
                {id: 6, price: 0.1},
                {id: 3, price: 1},
                {id: 4, price: 2},
                {id: 1, price: 10},
                {id: 2, price: 11.5}
            ]
        }

        sortProducts(products)
        products[1] = {id: 2, price: 11.5}
        const result = sortProducts(products)
        expect(result).toEqual(expectedResult)
    })


    test('should called twice without modifications return nuls', () => {
        const products = [
            {id: 1, price: 10},
            {id: 2, price: 11},
            {id: 3, price: 1},
            {id: 4, price: 2},
            {id: 5, price: 100},
            {id: 6, price: 0.1}
        ]

        const expectedResult = {
            highest: null,
            lowest: null
        }

        sortProducts(products)
        sortProducts(products)
        products[1] = {id: 2, price: 11.5}
        sortProducts(products)
        const result = sortProducts(products)
        expect(result).toEqual(expectedResult)
    })
})

describe('check compareArrays func', () => {
    test('should equal arrs return true', () => {
        const arr1 = [
            {id: 1, price: 10},
            {id: 2, price: 11},
            {id: 3, price: 1}
        ]

        const arr2 = [
            {id: 1, price: 10},
            {id: 2, price: 11},
            {id: 3, price: 1}
        ]

        const result = compareArrays(arr1, arr2)
        expect(result).toBeTruthy()
        const result2 = compareArrays([1, 2], [1, 2])
        expect(result2).toBeTruthy()
    })

    test('should non-equal arrs return false', () => {
        const arr1 = [
            {id: 1, price: 10},
            {id: 2, price: 11},
            {id: 3, price: 1}
        ]

        const arr2 = [
            {id: 2, price: 10},
            {id: 2, price: 11},
            {id: 3, price: 1}
        ]

        const result = compareArrays(arr1, arr2)
        expect(result).toBeFalsy()
        const result2 = compareArrays(arr1, [])
        expect(result2).toBeFalsy()
    })
})