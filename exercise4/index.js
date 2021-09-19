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

const requestLogger = (req, res, next) => {
    console.log('Method:', req.method)
    console.log('Path:  ', req.path)
    console.log('Body:  ', req.body)
    console.log('---')
    next()
}

app.use(requestLogger)

/* get products */
app.get('/products', (req, res) => {
    console.log('Search:' + req.query.search)
    console.log('Category:' + req.query.category)
    console.log('Manufacturer:' + req.query.manufacturer)

    let productsToShow = [...productsCopy]

    if (req.query.name) {
        productsToShow = productsToShow.filter(product => {
            /*             console.log('COMPARING', product.name.toLowerCase(), 'AND', req.query.name)
                        console.log(String(product.name.toLowerCase()).includes(String(req.query.name))) */
            return String(product.name.toLowerCase()).includes(String(req.query.name))
        })
    }

    if (req.query.manufacturer) {
        productsToShow = productsToShow.filter(product => {
            /*             console.log('COMPARING', product.manufacturer.toLowerCase(), 'AND', req.query.manufacturer) */
            return String(product.manufacturer.toLowerCase()) === (String(req.query.manufacturer))
        })
    }

    if (req.query.category) {
        productsToShow = productsToShow.filter(product => {
            /*             console.log('COMPARING', product.category.toLowerCase(), 'AND', req.query.category) */
            return String(product.category.toLowerCase()) === (String(req.query.category))
        })
    }

    res.json(productsToShow)
})

/* get single product */
app.get('/products/:id', (req, res) => {
    const id = req.params.id
    console.log(typeof id)
    const item = productsCopy.filter(product => product.id === id)
    console.log(item)
    res.json(item)
})

/* get all users */
app.get('/users', (req, res) => {
    res.json(usersCopy)
})

/* get all invoices */
app.get('/invoices', (req, res) => {
    res.json(invoicesCopy)
})

/* Get invoices of a user */
app.get('/users/:userId/invoices', (req, res) => {
    const id = req.params.userId
    const user = usersCopy.find(user => user.id === id)
    const userInvoices = user.invoices
    console.log(userInvoices.length)

    const newJson = []

    for (let i = 0; i < userInvoices.length; i++) {
        newJson.push(invoicesCopy.find(invoice => invoice.id === userInvoices[i]))
    }

    res.json(newJson)
})

/* Get a single invoice of a user */
app.get('/users/:userId/invoices/:invoiceId', (req, res) => {
    const userId = req.params.userId
    const invoiceId = req.params.invoiceId
    const user = usersCopy.find(user => user.id === userId)
    const userInvoices = user.invoices
    const invoiceToFind = userInvoices.find(invoice => invoice === invoiceId)
    console.log(userInvoices.length)

    res.json(invoicesCopy.find(invoice => invoice.id === invoiceToFind))
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
app.post('/invoices/create-invoice', (req, res) => {
    const body = req.body
    //console.log(body.boughtItems)

    let newInvoice = {
        id: nanoid.nanoid(),
        boughtItems: body.boughtItems
    }

    invoicesCopy.push(newInvoice)

    const indexOfUser = usersCopy.findIndex(user => user.id === body.userId)
    console.log(indexOfUser)

    usersCopy[indexOfUser].invoices.push(newInvoice.id)

    console.log(newInvoice)
    res.json(body)
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

/* Get a single invoice of a user */
app.delete('/users/:userId/invoices/:invoiceId', (req, res) => {
    const userId = req.params.userId
    const invoiceId = req.params.invoiceId
    const user = usersCopy.find(user => user.id === userId)
    const userInvoices = user.invoices

    if (userInvoices.find(invoice => invoice === invoiceId)) {
        const index = users.findIndex(user => user.id === userId)
        usersCopy[index].invoices = usersCopy[index].invoices.filter(invoice => invoice !== invoiceId)
        res.status(204).end()
        return
    }

    res.status(400).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('server running on port', PORT)
})