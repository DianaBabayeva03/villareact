import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styles from './Cards.module.scss'
import { RiDeleteBin6Fill } from "react-icons/ri";

const CardsBasket = ({item, remove, addwishlist}) => {
  return (
    <div className={styles.blogPostCard}>
        <div className={styles.cardImg}>
            <img src={item.thumbnail} />
        </div>
        <div className={styles.cardText}>
            <span>{item.title}</span>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <h5>$ {item.price}</h5>
            <h4>Count: {item.count}</h4>
            <div className={styles.btns}>
                <button onClick={remove}><RiDeleteBin6Fill /></button>
                <button onClick={addwishlist}><FaHeart /></button>
            </div>
        </div>
    </div>
  )
}

export default CardsBasket