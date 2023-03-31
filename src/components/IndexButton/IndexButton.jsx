import styles from './IndexButton.module.css';

export const IndexButton = ({href, text}) => {
    return (
    <a href={href} className={styles.IndexButtonLink}>
        <button>{text}</button>
    </a>
    )
}
