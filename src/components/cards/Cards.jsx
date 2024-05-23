import React from 'react'
import styles from './Cards.module.scss'
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Cards = ({item, addbasket, addwishlist}) => {
  return (
    <div className={styles.blogPostCard}>
        <div className={styles.cardImg}>
            <img src={item.thumbnail} />
        </div>
        <div className={styles.cardText}>
            <span>{item.title}</span>
            <h5>$ {item.price}</h5>
            <div className={styles.btns}>
                <button onClick={addbasket}><FaShoppingBag /></button>
                <button onClick={addwishlist}><FaHeart /></button>
            </div>
        </div>
    </div>
  )
}

export default Cards