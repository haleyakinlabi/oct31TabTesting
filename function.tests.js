const {
    returnTwo,
    greeting,
    add, 
    multiply, 
    subtract, 
    divide
} = require('./functions')


test('return two', () => {
    expect(returnTwo()).toBe(2)
  })

test('return Hello, James', () => {
    expect(greeting('James')).toBe('Hello, James')
})

test ('return Hello, Jill', () => {
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('add', () => {
    expect(add(1, 2)).toBe(3)
})
test('add', () => {
    expect(add(5, 9)).toBe(14)
})


describe('Math Functions', () => {
    test('multiply', () =>{
        expect(multiply(2, 2)).toBe(4)
    })
    test('divide', () => {
        expect (divide(6, 3)).toBe(3)
    })
    test('subtract', () => {
        expect (subtract(5, 4)).toBe(1)
    })
})