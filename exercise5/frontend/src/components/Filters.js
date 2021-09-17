import React from 'react';
import styles from './Filters.module.css';
import SearchField from './SearchField'
import ViewToggle from './ViewToggle'
import SortDropdown from './SortDropdown'

const Filters = ({ filter, handleDropdownChange, handleSearchChange, search, handleLayoutChange, listLayout }) => {

    console.log('Layout: ' + listLayout)

    return (
        <div className={styles.filters}>
            <div className={styles.left}>
                <SearchField
                    search={search}
                    handleSearchChange={handleSearchChange}
                ></SearchField>
            </div>
            <div className={styles.right}>
                <div>
                    <ViewToggle
                        listLayout={listLayout}
                        handleLayoutChange={handleLayoutChange}
                    ></ViewToggle>
                </div>
                <div>
                    <SortDropdown 
                        filter={filter} 
                        handleDropdownChange={handleDropdownChange}
                    ></SortDropdown>
                </div>
            </div>

        </div>
    )
}

export default Filters