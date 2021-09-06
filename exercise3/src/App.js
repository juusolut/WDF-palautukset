import './App.css';
import React, {useState, useEffect} from 'react';
import Product from './components/Product'
import Header from './components/Header'
import ProductService from './services/ProductService'
import Filters from './components/Filters';

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('descending')
  const [search, setSearch] = useState('Search')

  useEffect(() => {
    //console.log(getProducts())

    // Simulates server request for product data

    setTimeout(() => {
      const obj = ProductService.getProducts()
      let copy = JSON.parse(JSON.stringify(obj));
      copy.sort( (a,b) => a.price - b.price)
      setProducts(copy)
    }, 0)
  }, [])


  console.log(products.length)
  
  const productsToShow = search.length === 0 ? products :  products.filter(product => product.name.trim().toLowerCase().includes(search.trim().toLowerCase())) 

  const handleChange = (event) => {
    setFilter(event.target.value)
    console.log(event.target.value)

    if (event.target.value === 'descending') {
      let obj = JSON.parse(JSON.stringify(products));
      obj.sort( (a,b) => a.price - b.price)
      console.log(products)
      console.log(obj)
      setProducts(obj)
    }

    if (event.target.value === 'ascending') {
      let obj = JSON.parse(JSON.stringify(products));
      obj.sort( (a,b) => b.price - a.price)
      console.log(products)
      console.log(obj)
      setProducts(obj)
    }
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <>
    <Header></Header>

    <Filters filter={filter} handleSearchChange={handleSearchChange} handleSearch={handleSearchChange} search={search}></Filters>
      
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
