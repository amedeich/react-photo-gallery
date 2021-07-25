import useWindow from '@/hooks/use-window'
import { medium } from '@/_sass/export-variables.module.scss'
import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import Button from './Button/Button'
import Drawer from './Drawer/Drawer'
import styles from './Header.module.scss'
import Jumbotron from './Jumbotron/Jumbotron'
import Logo from './Logo/Logo'
import options from './options'

const Backdrop = props => {
  return props.isSidebarActive && <div className={styles.backdrop} onClick={props.onClose}></div>
}

const Overlay = props => {
  const { isSidebarActive, onToggleSidebar } = props
  return (
    <Drawer isSidebarActive={isSidebarActive} onToggleSidebar={onToggleSidebar}>
      {props.children}
    </Drawer>
  )
}

const Header = () => {
  const [isActive, setIsActive] = useState('all')
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [width] = useWindow()
  const [$medium] = medium.split('px')

  if (width > $medium && isSidebarActive) {
    setIsSidebarActive(state => !state)
  }

  const setActiveHandler = (_, id) => setIsActive(id)
  const toggleSidebarHandler = () => setIsSidebarActive(!isSidebarActive)
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={toggleSidebarHandler} isSidebarActive={isSidebarActive} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay isSidebarActive={isSidebarActive} onToggleSidebar={toggleSidebarHandler}>
          {options.map(option => (
            <Button key={option.slug} isActive={isActive} option={option} onSetActiveHandler={setActiveHandler} />
          ))}
        </Overlay>,
        document.getElementById('overlay-root')
      )}
      <header className={styles.header}>
        <div className={styles.menu}>
          <AiOutlineMenu onClick={toggleSidebarHandler} />
        </div>
        <Logo />
        <div className={styles.navContainer}>
          {options.map(option => (
            <Button key={option.slug} isActive={isActive} option={option} onSetActiveHandler={setActiveHandler} />
          ))}
        </div>
      </header>
      <Jumbotron />
    </Fragment>
  )
}

export default Header
