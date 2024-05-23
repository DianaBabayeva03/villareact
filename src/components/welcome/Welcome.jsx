import React from 'react'
import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <div className={styles.welcome}>
        <div className={styles.container}>
            <div className={styles.welcomeText}>
                <h2>Welcome to <span>Villa</span> resort</h2>
                <p>Discover our world-class hotel & restaurant resort.</p>
                <div className={styles.btns}>
                    <button className={styles.btnbeauty}>EXPLORE THE BEAUTY</button>
                    <button className={styles.btndownload}>DOWNLOAD</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome