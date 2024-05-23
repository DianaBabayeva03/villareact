import React from 'react';
import styles from './Header.module.scss';
import { IoHome } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigation = useNavigate()

  return (
    <div className={styles.headerBox}>
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1>Villa</h1>
            </div>
            <div className={styles.iconBox}>
                <span onClick={() => navigation('/')}><IoHome /></span>
                <span onClick={() => navigation('/basket')}><FaShoppingBag /></span>
                <span onClick={() => navigation('/wishlist')}><FaHeart /></span>
                <span onClick={() => navigation('/dashboard')}><MdAdminPanelSettings /></span>
            </div>
            <div className={styles.navBar}>
                <div className={styles.navBarIcon}>
                    <span><FaBars /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header