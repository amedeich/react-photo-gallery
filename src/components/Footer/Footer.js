import { FaHeart, FaReact } from 'react-icons/fa'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <small>
        made with <FaHeart /> in <FaReact />
      </small>
    </div>
  )
}

export default Footer
