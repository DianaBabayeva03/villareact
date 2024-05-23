import React from 'react'
import styles from './Cards.module.scss'
import { FaShoppingBag } from 'react-icons/fa';
import { FaHeartCircleMinus } from "react-icons/fa6";

const CardsWish = ({ item, remove }) => {
  return (
    <div className={styles.blogPostCard}>
        <div className={styles.cardImg}>
            <img src={item.thumbnail} />
        </div>
        <div className={styles.cardText}>
            <span>{item.title}</span>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>$ {item.price}</h5>
            <div className={styles.btns}>
                <button><FaShoppingBag /></button>
                <button onClick={remove}><FaHeartCircleMinus /></button>
            </div>
        </div>
    </div>
  )
}

export default CardsWish