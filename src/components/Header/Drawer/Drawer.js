import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './Drawer.module.scss'

const Drawer = props => {
  const { isSidebarActive, onToggleSidebar } = props
  return (
    <nav className={isSidebarActive ? `${styles.navMenu} ${styles.navMenuActive}` : styles.navMenu}>
      <div className={styles.navMenuItems}>
        <div>
          <div className={styles.navbarToggle}>
            <AiOutlineClose onClick={onToggleSidebar} />
          </div>
          <div className={styles.navbarItemContainer}>{props.children}</div>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Drawer)
