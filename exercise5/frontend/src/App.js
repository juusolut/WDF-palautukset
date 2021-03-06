import styles from './App.module.css';
import React, { useState, useEffect } from 'react';
import Product from './components/Product'
import Header from './components/Header'
import ProductService from './services/ProductService'
import Filters from './components/Filters';
import SearchField from './components/SearchField'
import CameraAlt from '@material-ui/icons/CameraAlt';
import HeadsetMic from '@material-ui/icons/HeadsetMic';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import AdminProductList from './components/AdminProductList';
import Category from './components/Category';

function App() {
    const [products, setProducts] = useState([])
    const [sorting, setSorting] = useState('descending')
    const [search, setSearch] = useState('')
    const [listLayout, setlistLayout] = useState(false)
    const [category, setCategory] = useState('ALL CATEGORIES')
    const [manufacturer, setManufacturer] = useState('ALL MANUFACTURERS')
    const [isLoading, setisLoading] = useState(true)
    const [allCategories, setAllCategories] = useState([])
    const [allManufacturers, setAllManufacturers] = useState([])
    const [adminMode, setAdminMode] = useState(false)

    useEffect(() => {
        setisLoading(true)
        ProductService
            .getProducts('', '', '')
            .then(res => {
                const sortedProducts = sortProducts('descending', res)
                setProducts(sortedProducts)
                console.log(res)
                setisLoading(false)

                let extractedCategories = res.map(product => product.category)
                extractedCategories.unshift('ALL CATEGORIES')
                setAllCategories([...new Set(extractedCategories)])

                let extractedManufacturers = res.map(product => product.manufacturer)
                extractedManufacturers.unshift('ALL MANUFACTURERS')
                setAllManufacturers([...new Set(extractedManufacturers)])
            })

    }, [])

    useEffect(() => {
        setisLoading(true)
        ProductService
            .getProducts(search, category, manufacturer)
            .then(res => {
                const sortedProducts = sortProducts(sorting, res)
                setProducts(sortedProducts)
                console.log(res)
                setisLoading(false)
            })

    }, [search, category, manufacturer, sorting])

    const handleDropdownChange = (event) => {
        setSorting(event.target.value)
        const productsToSort = [...products]
        //console.log(event.target.value)
        const sortedProducts = sortProducts(event.target.value, productsToSort)
        setProducts(sortedProducts)
    }

    const sortProducts = (sortingString, productsToSort) => {
        if (sortingString === 'ascending') {
            let obj = JSON.parse(JSON.stringify(productsToSort));
            obj.sort((a, b) => a.price - b.price)
            //console.log(products)
            //console.log(obj)
            return obj
        }

        if (sortingString === 'descending') {
            let obj = JSON.parse(JSON.stringify(productsToSort));
            obj.sort((a, b) => b.price - a.price)
            //console.log(products)
            //console.log(obj)
            return obj
        }

        if (sortingString === 'best') {
            console.log('best')
            let obj = JSON.parse(JSON.stringify(productsToSort));
            obj.sort((a, b) => b.rating - a.rating)
            //console.log(products)
            //console.log(obj)
            return obj
        }
    }

    const handleSearchChange = (event) => {
        //console.log(event.target.value)
        setSearch(event.target.value)
    }

    const handleLayoutChange = () => {
        setlistLayout(!listLayout)
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
        console.log(event.target.value)
    }

    const handleManufacturerChange = (event) => {
        setManufacturer(event.target.value)
        console.log(event.target.value)
    }

    const handleProductDeletion = (id) => {
        ProductService
            .deleteProduct(id)
            .then(res => {
                console.log('deletion was successful')
                let productsCopy = [...products]
                productsCopy = productsCopy.filter(product => product.id !== id)
                setProducts(productsCopy)
            })
    }

    const handleAdminToggle = () => {
        setAdminMode(!adminMode)
    }

    const handleAddProduct = (newProduct) => {
        console.log(newProduct)
        ProductService
            .addProduct(newProduct)
            .then(res => {
                let productsCopy = [...products]
                productsCopy.unshift(res)
                setProducts(productsCopy)
            })
    }

    const productsToShow =
        search.length === 0 ? products
            : products.filter(product =>
                product.name.trim().toLowerCase().includes(search.trim().toLowerCase()))

    const categoriesToShow = [...allCategories]
    const manufacturersToShow = [...allManufacturers]

    console.log('isLoading?', isLoading)
    const productsStyle = listLayout ?
        {
            gridTemplateColumns: 'repeat(auto-fill, 100%)',
            gridAutoRows: 'auto'
        }
        : {
            gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
            gridAutoRows: 'auto'
        }

    return (
        <>
            <Header></Header>

            <div className={styles.canvas}>

                <Filters
                    filter={sorting}
                    handleDropdownChange={handleDropdownChange}
                    handleSearchChange={handleSearchChange}
                    search={search}
                    handleLayoutChange={handleLayoutChange}
                    listLayout={listLayout}
                    handleAdminToggle={handleAdminToggle}
                ></Filters>

                <div className={styles.asideAndMain}>

                    <aside>
                        <h2>Search products</h2>
                        <SearchField
                            search={search}
                            handleSearchChange={handleSearchChange}
                        ></SearchField>

                        <h2>Categories</h2>
                        <div className={styles.radioButtons}>
                            {categoriesToShow.map(cat => {
                                return (
                                    <Category key={cat}
                                        category={cat}
                                        handleCategoryChange={handleCategoryChange}
                                        currentCategory={category}>
                                        name={'categories'}
                                    </Category>
                                )
                            })}
                        </div>

                        <h2>Manufacturers</h2>
                        <div className={styles.radioButtons}>
                            {manufacturersToShow.map(manu => {
                                return (
                                    <Category key={manu}
                                        category={manu}
                                        handleCategoryChange={handleManufacturerChange}
                                        currentCategory={manufacturer}>
                                        name={'manufacturers'}
                                    </Category>
                                )
                            })}
                        </div>

                    </aside>
                    <main>

                        {
                            isLoading === true ?
                                <div className={styles.noResults}>

                                    <div className={styles.loading}>
                                        <div className={styles.dot}>
                                            <CameraAlt fontSize='medium'></CameraAlt>
                                        </div>
                                        <div className={styles.dot}>
                                            <HeadsetMic fontSize='medium'></HeadsetMic>
                                        </div>
                                        <div className={styles.dot}>
                                            <LaptopChromebookIcon fontSize='medium'></LaptopChromebookIcon>
                                        </div>
                                        <div className={styles.dot}>
                                            <TabletAndroidIcon fontSize='medium'></TabletAndroidIcon>
                                        </div>
                                    </div>
                                </div>
                                : productsToShow.length === 0
                                    ? <div className={styles.noResults}>No results ????</div>
                                    : adminMode === true
                                        ? <AdminProductList
                                            products={productsToShow}
                                            handleProductDeletion={handleProductDeletion}
                                            handleAddProduct={handleAddProduct}
                                        ></AdminProductList>
                                        :
                                        <div className={styles.productsContainer} style={productsStyle}>
                                            {productsToShow.map((item) => {

                                                //console.log('here ', item)
                                                return (
                                                    <Product key={item.id} product={item} isRow={listLayout}></Product>
                                                )
                                            })}
                                        </div>
                        }

                    </main>
                </div>




            </div>
        </>
    )
}

export default App;
