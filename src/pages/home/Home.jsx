import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Blog from '../../components/blogpost/Blog'
import Cards from '../../components/cards/Cards'
import Enjoy from '../../components/enjoyyourlife/Enjoy'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Visit from '../../components/visit/Visit'
import Welcome from '../../components/welcome/Welcome'
import styles from './Home.module.scss'

const Home = () => {

  const [data, setData] =useState([]) 

  const getData = () => {
    axios.get('https://dummyjson.com/products')
    .then( res => {
      setData(res.data.products)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const addToBasket = (item) => {
    axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/basket')
    .then( res => {
      const db = res.data
      const existingFile = db.find(x => x.id == item.id)
      if(existingFile){
        axios.put(`https://664b0dc2a300e8795d44055f.mockapi.io/basket/${existingFile.id}`, {...existingFile, count: existingFile.count + 1}) 
      } else{
        axios.post('https://664b0dc2a300e8795d44055f.mockapi.io/basket', {...item, count: 1})
      }
    })
  }

  const addToWish = (item) => {
    axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/wishlist')
    .then( res => {
      const db = res.data
      const existingFile = db.find(x => x.id == item.id)
      if(existingFile){
        alert('Mehsul wishlistde movcuddur') 
      } else{
        axios.post('https://664b0dc2a300e8795d44055f.mockapi.io/wishlist', item)
      }
    })
  }

  return (
    <>
        <Header />
        <Welcome />
        <Visit />
        <div className={styles.cardBox}>
            {
              data&&
                data.map( (item) => <Cards item={item} addbasket = {() => addToBasket(item)} addwishlist = {() => addToWish(item)} />)
            }
        </div>
        <Enjoy />
        <Blog />
        <Footer />
        
    </>
  )
}

export default Home
