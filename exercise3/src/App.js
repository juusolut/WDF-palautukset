import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import Product from './components/Product'
import Header from './components/Header'
import ProductService from './services/ProductService'
import Filters from './components/Filters';
import { useSpring, animated, useTransition } from 'react-spring';

function App() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('descending')
  const [search, setSearch] = useState('')
  const [listLayout, setlistLayout] = useState(false)

  useEffect(() => {
    //console.log(getProducts())

    // Simulates server request for product data

    setTimeout(() => {
      const obj = ProductService.getProducts()
      let copy = JSON.parse(JSON.stringify(obj));
      copy.sort((a, b) => a.price - b.price)
      setProducts(copy)
    }, 2000)

  }, [])

  const handleDropdownChange = (event) => {
    setFilter(event.target.value)
    //console.log(event.target.value)

    if (event.target.value === 'descending') {
      let obj = JSON.parse(JSON.stringify(products));
      obj.sort((a, b) => a.price - b.price)
      //console.log(products)
      //console.log(obj)
      setProducts(obj)
    }

    if (event.target.value === 'ascending') {
      let obj = JSON.parse(JSON.stringify(products));
      obj.sort((a, b) => b.price - a.price)
      //console.log(products)
      //console.log(obj)
      setProducts(obj)
    }

    if (event.target.value === 'best') {
      console.log('best')
      let obj = JSON.parse(JSON.stringify(products));
      obj.sort((a, b) => b.rating - a.rating)
      //console.log(products)
      //console.log(obj)
      setProducts(obj)
    }
  }

  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    setSearch(event.target.value)
  }

  const handleLayoutChange = () => {
    setlistLayout(!listLayout)
  }

  const productsToShow =
    search.length === 0 ? products
      : products.filter(product =>
        product.name.trim().toLowerCase().includes(search.trim().toLowerCase()))

  console.log(listLayout)

  const style = listLayout ?
    {
      gridTemplateColumns: 'repeat(auto-fill, 100%)',
      gridAutoRows: 'auto'
    }
    : {
      gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
      gridAutoRows: 'auto'
    }


  console.log(style)

  return (
    <>
      <Header></Header>

      <Filters
        filter={filter}
        handleDropdownChange={handleDropdownChange}
        handleSearchChange={handleSearchChange}
        search={search}
        handleLayoutChange={handleLayoutChange}
        listLayout={listLayout}
      ></Filters>

      {productsToShow.length > 0 ?
        <div className={styles.productsContainer} style={style}>

          {productsToShow.map((item) => {

            //console.log('here ', item)
            return (
              <Product key={item.id} product={item} isRow={listLayout}></Product>
            )
          })
          }

        </div>
        : products.length === 0 ?
          <div className={styles.noResults}>
            
            <div className={styles.loading}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          : <div className={styles.noResults}>No results 😕</div>

      }



      {/*       <div className={styles.productsContainer} style={style}>

        {productsToShow.length > 0 ? productsToShow.map((item) => {

          //console.log('here ', item)
          return (
            <Product key={item.id} product={item} isRow={listLayout}></Product>
          )
        })
          : <span className={styles.noResults}>No results 😕</span>
        }

      </div> */}

    </>
  )
}

export default App;
