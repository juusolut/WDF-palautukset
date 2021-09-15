const express = require('express')
const cors = require('cors')
const nanoid = require('nanoid')
const products = require('./products.json')
const users = require('./users.json')
const invoices = require('./invoices.json')

const app = express()

app.use(cors())
app.use(express.json())

let productsCopy = [...products]
let usersCopy = [...users]
let invoicesCopy = [...invoices]

/* get all products */
app.get('/products', (req, res) => {
    res.json(productsCopy)
})

/* get all invoices */
app.get('/invoices', (req, res) => {
    res.json(invoicesCopy)
})

/* create new product (name, manufacturer, category, description, price - bonus image) */
app.post('/products/create-new', (req, res) => {
    const body = req.body
    console.log(body)

    const newProduct = {
        id: nanoid.nanoid(),
        name: body.name,
        manufacturer: body.manufacturer,
        category: body.category,
        description: body.description,
        price: body.price,
        image: body.image,
        rating: 3.8,
        reviews: 24,
        stock: 1100
    }
    console.log(JSON.stringify(newProduct))

    productsCopy.push(newProduct)
    res.json(body)
})

/* Create user (basic information name, address etc.) */
app.post('/register', (req, res) => {
    const body = req.body
    console.log(body)

    const newUser = {
        id: nanoid.nanoid,
        name: body.name,
        streetAddress: body.streetAddress,
        postcode: body.postcode,
        city: body.city,
        password: body.password,
        email: body.email
    }
    console.log(JSON.stringify(newUser))

    usersCopy.push(newUser)
    console.log(usersCopy)
    res.json(body)
})

/* Purchase products for a user 
-> create invoice with information of all the 
bought products + total sum */
app.post('/create-invoice', (req, res) => {
    const body = req.body

    let newInvoice = {
        id: nanoid.nanoid(),
        products: [
        ]
    }
    for (let i = 0; i < body.length; i++) {
        newInvoice.products.push(body[i])
    }

    invoicesCopy.push(newInvoice)

    console.log(invoicesCopy)
    res.json(body)
})


/* get single product */
app.get('/products/:id', (req, res) => {
    const id = req.params.id
    console.log(typeof id)
    const item = productsCopy.filter(product => product.id === id)
    console.log(item)
    res.json(item)
})

/* modify product */
app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const body = req.body

    const index = productsCopy.findIndex(product => product.id === id)
    console.log(index)

    const modifiedProduct = {
        id: productsCopy[index].id,
        name: body.name || productsCopy[index].name,
        manufacturer: body.manufacturer || productsCopy[index].manufacturer,
        category: body.category || productsCopy[index].category,
        description: body.description || productsCopy[index].description,
        price: body.price || productsCopy[index].price,
        image: body.image || productsCopy[index].image,
        rating: productsCopy[index].rating,
        reviews: productsCopy[index].reviews,
        stock: productsCopy[index].stock
    }

    productsCopy[index] = modifiedProduct

    res.status(200).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('server running on port', PORT)
})