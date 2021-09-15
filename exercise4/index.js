const express = require('express')
const cors = require('cors')
const products = require('./products.json')

const app = express()

app.use(cors())
app.use(express.json())

let products2 = [...products]

/* get all products */
app.get('/products', (req, res) => {
    res.json(products2)
})

/* create new product (name, manufacturer, category, description, price - bonus image) */
app.post('/products/create-new', (req, res) => {
    const body = req.body
    console.log(body)

    const newProduct = {
        id: products2.length + 1,
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

    products2.push(newProduct)
    res.json(body)
})

/* get single product */
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(typeof id)
    const item = products2.filter(product => product.id === id)
    console.log(item)
    res.json(item)
})

/* modify product */
app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const body = req.body

    const index = products2.findIndex(product => product.id === id)
    console.log(index)

    const modifiedProduct = {
        id: products2[index].id,
        name: body.name || products2[index].name,
        manufacturer: body.manufacturer || products2[index].manufacturer,
        category: body.category || products2[index].category,
        description: body.description || products2[index].description,
        price: body.price || products2[index].price,
        image: body.image || products2[index].image,
        rating: products2[index].rating,
        reviews: products2[index].reviews,
        stock: products2[index].stock
    }

    products2[index] = modifiedProduct

    res.status(200).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('server running on port', PORT)
})