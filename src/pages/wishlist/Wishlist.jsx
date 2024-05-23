import axios from 'axios'
import styles from './Wishlist.module.scss'
import React, { useEffect, useState } from 'react'
import CardsWish from '../../components/cards/CardsWish'
import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'

const Wishlist = () => {

  const [data, setData] = useState([])

  const getData = () => {
    axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/wishlist')
    .then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteData = (id) => {
    axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/wishlist/${id}`)
    setTimeout(() => {
      getData()
    }, 300)
  }


  return (
    <>
      <Header />
      <Welcome />
      <div className={styles.wishText}>
        <h2>WISHLIST MEHSULLARI</h2>
      </div>
      <div className={styles.cardsBox}>
        {
          data &&
            data.map((item) => <CardsWish remove={ () => deleteData(item.id)} item={item} />)
        }
      </div>
    </>
  )
}

export default Wishlist