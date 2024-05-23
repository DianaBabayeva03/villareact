import React from 'react'
import styles from './Enjoy.module.scss'

const Enjoy = () => {
  return (
    <div className={styles.enjoy}>
        <div className={styles.container}>
            <div className={styles.enjoyText}>
                <h2>A gorgeous place to enjoy your life.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
            </div>
            <div className={styles.enjoyImg}>
                <img src="https://preview.colorlib.com/theme/villa/img/slider-4.jpg" alt="villa" />
            </div>
        </div>
    </div>
  )
}

export default Enjoy