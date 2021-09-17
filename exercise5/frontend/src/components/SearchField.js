import styles from './SearchField.module.css';

const SearchField = ({ search, handleSearchChange }) => {
    return (
        <>
            <form styles={styles.searchbox}>
                <input className={styles.input}
                    value={search}
                    onChange={handleSearchChange}
                    placeholder='Search'
                >
                </input>
                <input 
                    className={styles.submit}
                    type="submit" 
                    value="Search">
                </input>
            </form>

        </>
    )

}

export default SearchField

