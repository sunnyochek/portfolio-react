import styles from './MainLayout.module.css'
export const MainLayout = ({children}) => {
    return <div className={styles.wrapper}><main className={styles.main}>{children}</main></div>
}