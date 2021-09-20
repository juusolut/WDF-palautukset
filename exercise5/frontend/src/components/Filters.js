import React from 'react';
import styles from './Filters.module.css';
import ViewToggle from './ViewToggle'
import SortDropdown from './SortDropdown'

const Filters = ({
    filter,
    handleDropdownChange,
    handleSearchChange,
    search,
    handleLayoutChange,
    listLayout,
    handleAdminToggle
}) => {

    console.log('Layout: ' + listLayout)

    return (
        <div className={styles.filters}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
                <button
                    className={styles.adminButton}
                    onClick={handleAdminToggle}
                >Toggle Admin mode
                </button>
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