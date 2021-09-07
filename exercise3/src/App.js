import './App.css';
import React, {useState, useEffect} from 'react';
import Product from './components/Product'
import Header from './components/Header'
import ProductService from './services/ProductService'
import Filters from './components/Filters';
import {useSpring, animated, useTransition} from 'react-spring';

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('descending')
  const [search, setSearch] = useState('')
  //const [search, setSearch] = useState('')

  const props = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 500}
  })

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

  
  // testing

  const [banks, setBank] = useState([
    { bic: "1", item: "test" },
    { bic: "2", item: "vau" },
    { bic: "3", item: "3" },
    { bic: "4", item: "4" },
    { bic: "5", item: "5" }
  ])

  const transitionsOld = useTransition(banks, (bank) => bank.bic, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {
      duration: 1000 
    }
  })

  const transitions = useTransition(productsToShow, (product) => product.id, {
    from: {opacity: 0, maxWidth: '0rem'},
    enter: {opacity: 1, maxWidth: '40rem'},
    leave: {opacity: 0, maxWidth: '0rem'},
    config: {
      mass: 1
    }
  })

  console.log(transitions)

  const handleDropdownChange = (event) => {
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

    <Filters filter={filter} handleDropdownChange={handleDropdownChange} handleSearchChange={handleSearchChange} search={search}></Filters>
      
    <div className='productsContainer'>

{/*     {
        productsToShow.length > 0 ? transitions.map( ({ product, props}) => {
          console.log('here ' + product)
          return (
            <animated.div style={{...props}}>
              <Product key={product.id} product={product.product.id}></Product>
            </animated.div>
          )
        })
        : <p>No results</p>
    } */}

            


    {transitions.map(({item, props, key}) => { 

    console.log('here ', item)
    return(
          <animated.div
            key={item.id}
            style={{
              ...props,
            }}
          >
            <Product product={item}></Product>
          </animated.div>
        )}
        
      )
    }

    </div>
    </>
  )
}

export default App;
