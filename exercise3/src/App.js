import './App.css';
import React, {useState, useEffect} from 'react';
import Product from './components/Product'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    //console.log(getProducts())
    setProducts(getProducts())
  }, [])

  const getProducts = () => {
    const productsObj = [
      {
        id: 1,
        name: 'Motherboard',
        rating: 3.5,
        reviews: 80,
        price: 108.99
      },
      {
        id: 2,
        name: 'CPU',
        rating: 5,
        reviews: 51,
        price: 235.00
      },
      {
        id: 3,
        name: 'Amazing HDD this is the fastest HDD in the world trust me',
        rating: 1.5,
        reviews: 2,
        price: 59.99
      },
      {
        id: 4,
        name: 'SSD',
        rating: null,
        reviews: 14,
        price: 82.55
      },
      {
        id: 5,
        name: 'Mechanical Keyboard',
        rating: 4.5,
        reviews: 8,
        price: 165.00
      },
      {
        id: 6,
        name: 'Headset',
        rating: 2.3,
        reviews: 241,
        price: 82.55
      },
      {
        id: 7,
        name: 'Mousepad',
        rating: 3.8,
        reviews: 24,
        price: 82.55
      },
      {
        id: 8,
        name: 'PC Case',
        rating: 4.0,
        reviews: 2,
        price: 35.25
      },
    ]

    return productsObj
  }

  console.log(products.length)

  const productsToShow =  products
  console.log(productsToShow)

  return (
    <>
      <h1>MegaStore</h1>
      <div className='productsContainer'>
        {
          productsToShow.length > 0 ? productsToShow.map(product => 
            <Product key={product.id} product={product}></Product>
          )
          : <p>No results</p>
        }
      </div>
    </>
  )
}

export default App;
