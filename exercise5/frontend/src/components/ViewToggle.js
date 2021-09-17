import styles from './ViewToggle.module.css';
import AppsIcon from '@material-ui/icons/ViewComfy';
import ViewListIcon from '@material-ui/icons/ViewList';

const ViewToggle = ({ listLayout, handleLayoutChange }) => {
    return (
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
    )

}

export default ViewToggle

