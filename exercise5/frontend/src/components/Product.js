import styles from './Product.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Prodcut = ({ product, isRow }) => {

    const starCssProperties = {
        '--percent': (product.rating / 5) * 100 + '%'
    }

    const stars = <div className={styles.stars} style={starCssProperties}></div>

    const inStock = product.stock > 0
    if (!inStock) {
        /* console.log(product.stock) */
    }

    const maxLength = 45

    const trimmedName = product.name.length > maxLength ? product.name.substring(0, maxLength - 3) + '...' : product.name

    /* console.log(trimmedName) */

    const productInStyle = {}
    productInStyle.flexDirection =  isRow ? 'row' : 'column'

    return (
        <div className={styles.product} style={productInStyle} >
            <div className={styles.image}>
                <img src={product.image} alt='product'></img>
            </div>
            <div className={styles.productTexts}>
                <span className={styles.name}>{trimmedName}</span>
                <div className={styles.rating}>
                    {product.rating === null ? 'No rating yet 🤷‍♂️ ' : stars}
                    <span>({product.reviews})</span>
                </div>
                <div className={styles.priceBuyContainer}>
                    <div className={styles.stockAndPrice}>
                        <span>In stock: {product.stock}</span>
                        <span className={styles.price}>
                            <b>{(Math.round(product.price * 100) / 100).toFixed(2)} €</b>
                        </span>
                    </div>
                    <button className={styles.buy} style={inStock ? {} : {backgroundColor: 'grey'}}>
                        <span>{inStock ? 'Add to cart' : 'No stock' }</span>
                        <ShoppingCartIcon></ShoppingCartIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Prodcut