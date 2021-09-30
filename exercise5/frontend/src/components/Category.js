import React from 'react';
import styles from './Category.module.css'

const Category = ({category, handleCategoryChange, currentCategory, name}) => {
    console.log("Category", currentCategory)
    return (
        <div className={styles.radioButton}>
            <input
                type='radio'
                name={name}
                id={category}
                value={category}
                onChange={handleCategoryChange}
                checked={currentCategory === category}
            ></input>
            <label htmlFor={category}>{category}</label>
        </div>
    )
}

export default Category