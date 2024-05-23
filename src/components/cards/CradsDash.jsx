import React from 'react'
import styles from './CardsDash.module.scss'

const CradsDash = ({item, remove}) => {
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
                <button>Update</button>
                <button onClick={remove}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default CradsDash