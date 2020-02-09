// Object property shorthand

const name = "Maodo"
const userAge = 24

const user = {
    name,
    userAge,
    location: 'Dakar'
}
// console.clear()
// console.log(user)

// Object destructing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label, stock} = product
// console.log(label)
// console.log(stock)

const transaction = (type, { label, stock }) => {
    console.log(type,label,stock)
}

transaction('order',product)