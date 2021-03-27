import styles from './index.module.css'

export default function Button({ children }) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  )
}
