import React from 'react';
import styles from './Filters.module.css';

const Filters = ({filter, handleChange, handleSearchChange, search}) => {

    let options = [
        {value: 'ascending', label: 'Price ascending'},
        {value: 'descending', label: 'Price descending'},
    ]

    console.log(options)
    console.log(filter)

    return (
        <div className={styles.filters}>
            <div>
            </div>
            <div>
               <input value={search} onChange={handleSearchChange}></input>
            </div>
            <div>
                <select value={filter} onChange={handleChange}>
                    {options.map(option => 
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    )}
                </select> 
            </div>
        </div>
    )
}

export default Filters