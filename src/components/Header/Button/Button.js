import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPhotos } from '../../../store/gallery-slice'
import styles from './Button.module.scss'

const Button = props => {
  const { option, isActive, onSetActiveHandler } = props
  const dispatch = useDispatch()
  const onClickHandler = (event, slug) => {
    onSetActiveHandler(event, slug)
    dispatch(fetchPhotos(slug))
  }
  return (
    <button
      key={option.slug}
      className={isActive === option.slug ? `${styles.navItem} ${styles.centered}` : styles.navItem}
      onClick={e => onClickHandler(e, option.slug)}
    >
      {option.name}
    </button>
  )
}

export default React.memo(Button)
