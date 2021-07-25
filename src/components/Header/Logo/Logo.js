import React from 'react'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h3>
        PhotoGallery<span className={styles.logoMarks}>!!</span>
      </h3>
    </div>
  )
}

export default React.memo(Logo)
