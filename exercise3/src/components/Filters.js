import React from 'react';
import styles from './Filters.module.css';
import AppsIcon from '@material-ui/icons/ViewComfy';
import ViewListIcon from '@material-ui/icons/ViewList';

const Filters = ({ filter, handleDropdownChange, handleSearchChange, search, handleLayoutChange, listLayout }) => {

    let options = [
        { value: 'ascending', label: 'Price ascending' },
        { value: 'descending', label: 'Price descending' },
        { value: 'best', label: 'Best rating' }
    ]

    console.log('Layout: ' + listLayout)

    return (
        <div className={styles.filters}>
            <div className={styles.left}>
                <input
                    value={search}
                    onChange={handleSearchChange}
                    placeholder='Search'
                ></input>
            </div>
            {/* <div className={styles.middle}>
            </div> */}
            <div className={styles.right}>
                <div>
                    <label className={styles.viewToggle}>
                        <input
                            type='checkbox'
                            checked={listLayout}
                            onChange={handleLayoutChange}
                        ></input>
                        <span className={styles.slider}>
                            <AppsIcon className={styles.icon}></AppsIcon>
                            <ViewListIcon className={styles.icon}></ViewListIcon>
                        </span>
                    </label>
                </div>
                <div>
                    <select value={filter} onChange={handleDropdownChange}>
                        {options.map(option =>
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        )}
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Filters