const Cart = require('./index')

const cart = new Cart()

test("add item to cart", () => {
    expect(cart.addItem("Hello")).toEqual({name: "Hello", count: 1})
})

test("add another item with same name", () => {
    expect(cart.addItem("Hello")).toEqual({name: "Hello", count: 2})
})

test("add item with only capital letters in name", () => {
    expect(cart.addItem("HELLO")).toEqual({name: "Hello", count: 3})
})

test("get all items", () => {
    expect(cart.getAllItems()).toEqual("Hello: 3\n")
})

test("remove negative count", () => {
    expect(cart.removeItem("Hello", -1)).toBe(false)
})