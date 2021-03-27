import useTranslation from 'next-translate/useTranslation'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

export default function Button({ label, children }) {
  const { t } = useTranslation('common')

  return (
    <button className={styles.button} type="button">
      {t(`${label}`)}
      {children}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
}

Button.defaultProps = {
  label: '',
  children: ''
}
