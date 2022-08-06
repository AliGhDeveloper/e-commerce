import styles from '../styles/Loader.module.css';
export default function Loading() {
    
    return (
        <div className={styles.loader}>
            <svg className={styles.loaderanimation} viewBox="25 25 50 50">
                <circle className={styles.loaderpath} cx="50" cy="50" r="20" fill="none" strokeWidth="2" stroke="#222529"></circle>
            </svg>
        </div>
    )
}