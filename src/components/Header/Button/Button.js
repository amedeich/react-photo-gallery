import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
  const {option, isActive, onSetActiveHandler } = props
  return <button 
      key={option.slug} 
      className={isActive === option.slug ? `${styles.navItem} ${styles.centered}` : styles.navItem} 
      onClick={(e) => onSetActiveHandler(e, option.slug)}>{option.name}
    </button>
}

export default React.memo(Button);