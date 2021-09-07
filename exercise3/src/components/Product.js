import React, {useState} from 'react';
import styles from './Product.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Prodcut = ({product}) => {
    
    const starCssProperties = {
        '--percent': (product.rating / 5) * 100 + '%'
    }

    let stars = <div className={styles.stars} style={starCssProperties}></div>

 
    return (
        <div className={styles.product}>
            <div className={styles.image}>
                <img src={product.image} alt='product'></img>
            </div>
            <div className={styles.productTexts}>
                <span className={styles.name}>{product.name}</span>
                <div className={styles.rating}>
                    {product.rating === null ? 'No rating yet 🤷‍♂️ ' : stars }
                    <span>({product.reviews})</span>
                </div>
                <div className={styles.priceBuyContainer}>
                    <span className={styles.price}>
                        <b>{(Math.round(product.price * 100) / 100).toFixed(2)} €</b>
                    </span>
                    <button className={styles.buy}>
                        <span>Add to cart</span>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Prodcut