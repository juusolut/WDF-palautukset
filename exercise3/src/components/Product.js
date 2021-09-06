import React from 'react';
import styles from './Product.module.css';

const Prodcut = ({product}) => {

    const starCssProperties = {
        '--percent': (product.rating / 5) * 100 + '%'
    }

    let stars = <div className={styles.stars} style={starCssProperties}></div>
    
 
    return (
        <div className={styles.product}>
            <img src='https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_UL320_.jpg' alt='product image'></img>
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
                    <button>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Prodcut