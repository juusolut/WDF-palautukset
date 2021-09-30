import styles from './SortDropdown.module.css';

const SortDropdown = ({ filter, handleDropdownChange }) => {

    let options = [
        { value: 'ascending', label: 'Price ascending' },
        { value: 'descending', label: 'Price descending' },
        { value: 'best', label: 'Best rating' }
    ]

    return (
        <select className={styles.selections} value={filter} onChange={handleDropdownChange}>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            )}
        </select>
    )

}

export default SortDropdown

