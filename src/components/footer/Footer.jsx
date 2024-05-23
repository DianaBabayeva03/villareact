import React from 'react'
import styles from './Footer.module.scss'
import { FaRegHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
        <div className={styles.container}>
            <div className={styles.footerBoxText}>
                <p>Copyright ©2024 All rights reserved | This template is made with <FaRegHeart /> by <span>Colorlib</span> </p>
            </div>
            <div className={styles.icons}>
                <button><FaInstagram /></button>
                <button><FaFacebookF /></button>
                <button><FaTwitter /></button>
            </div>
        </div>
    </div>
  )
}

export default Footer