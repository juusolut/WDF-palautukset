import React from 'react';
import styles from './Header.module.css';


const Header = () => {
    /* console.log('rendering header') */
    return (
        <header className={styles.header}>
            <h1>MegaStore</h1>
            <span>We may have it in stock!</span>
        </header>
    )
}

export default Header