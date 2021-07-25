import { memo } from 'react';
import styles from './Jumbotron.module.scss'


const Jumbotron = () => {
  console.log('jumbotron!!')
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3>EXPLORE BEYOND HORIZON</h3>
        <div className={styles.subtitleContainer}>
        <small>Magna mundi referrentur quo, no rebum dignissim qui. <br />
          Per quodsi accusata id, agam labores.</small>
        </div>
        <button className={styles.btn}>View our work</button>
      </div>
    </div>
  )
}

export default memo(Jumbotron);