import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardsBasket from '../../components/cards/CardsBasket'
import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'
import styles from './Basket.module.scss'

const Basket = () => {

  const [data, setData] = useState([])

  const getData = () => {
    axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/basket')
    .then((res) => {
        setData(res.data)
    })
}
  

  useEffect(() => {
    getData()
  }, [])

  const deleteData = (id) =>{
    axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/basket/${id}`)
    setTimeout(() => {
      getData()
    }, 500)
  }

  const addToWish = (item) => {
    axios.post('https://664b0dc2a300e8795d44055f.mockapi.io/wishlist', item)
  }

  return (
    <div>
      <Header />
      <Welcome />
      <div className={styles.basketText}>
        <h2>BASKET MEHSULLARI</h2>
      </div>
      <div className={styles.cardsBox}>
        {
          data &&
            data.map( (item) => <CardsBasket item={item} remove = {() => deleteData(item.id)} addwishlist= { () => addToWish(item)} />)
        }
      </div>
    </div>
  )
}

export default Basket