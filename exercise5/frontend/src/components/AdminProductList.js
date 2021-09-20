import { useState } from 'react'
import styles from './AdminProductList.module.css'


const AdminProductList = ({ products, handleProductDeletion, handleAddProduct }) => {

    const [newProduct, setNewProduct] = useState({
        name: '',
        manufacturer: '',
        category: '',
        description: '',
        price: 0,
        image: '',
        stock: 0
    })

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image url</th>
                    <th>Stock</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            value={newProduct.name}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.name = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <input
                            value={newProduct.manufacturer}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.manufacturer = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <input
                            value={newProduct.category}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.category = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <input
                            value={newProduct.description}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.description = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <input
                            value={newProduct.price}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.price = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <input
                            value={newProduct.image}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.image = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <input
                            value={newProduct.stock}
                            onChange={(event) => {
                                const copy = { ...newProduct }
                                copy.stock = event.target.value
                                setNewProduct(copy)
                                console.log(copy)
                            }}
                        ></input>
                    </td>
                    <td>
                        <button
                            style={{ backgroundColor: 'seagreen' }}
                            onClick={() => handleAddProduct(newProduct)}
                        >ADD
                        </button>
                    </td>
                </tr>
                {products.map(product => {
                    return (
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.manufacturer}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.image}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => handleProductDeletion(product.id)}>DELETE</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}

export default AdminProductList