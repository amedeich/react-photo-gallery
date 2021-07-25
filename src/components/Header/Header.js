import React, { Fragment, useState } from 'react'
import options from './Button/button-options'
import Button from './Button/Button'
import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import Jumbotron from './Jumbotron/Jumbotron'

const Header = () => {
  const [isActive, setIsActive] = useState('all')
  const setActiveHandler = (_, id) => setIsActive(id)
  return (
    <Fragment>
      <header className={styles.header}>
      <Logo />
     <div className={styles.navContainer}>
       {
         options.map(option => <Button 
          key={option.slug} 
          isActive={isActive} 
          option={option} 
          onSetActiveHandler={setActiveHandler} />)
       }
     </div>
    </header>
    <Jumbotron />
    </Fragment>
  )
}

export default Header;