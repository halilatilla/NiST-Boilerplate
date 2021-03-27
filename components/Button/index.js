import useTranslation from 'next-translate/useTranslation'

import styles from './index.module.css'

export default function Button({ label, children }) {
  const { t } = useTranslation('common')

  return (
    <button className={styles.button} type="button">
      {t(`${label}`)}
      {children}
    </button>
  )
}
