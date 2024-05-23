import React from 'react'
import styles from './Visit.module.scss'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Visit = () => {
  return (
    <div className={styles.visit}>
        <div className={styles.container}>
            <div className={styles.visitText}>
                <span>YOU CAN VISIT</span>
            </div>
            <div className={styles.visitCards}>
                <div className={styles.visitCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_1.jpg" alt="villa" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>Food & Wines</h3>
                        <div className={styles.icons}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStarHalfAlt /></span>
                            <span><FaRegStar /></span>
                        </div>
                        <span>3,239 reviews</span>
                    </div>
                </div>

                <div className={styles.visitCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_2.jpg" alt="villa" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>Resort & Spa</h3>
                        <div className={styles.icons}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStarHalfAlt /></span>
                            <span><FaRegStar /></span>
                        </div>
                        <span>4,921 reviews</span>
                    </div>
                </div>

                <div className={styles.visitCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_4.jpg" alt="villa" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>Hotel Rooms</h3>
                        <div className={styles.icons}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaRegStar /></span>
                        </div>
                        <span>2,112 reviews</span>
                    </div>
                </div>

                <div className={styles.visitCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_5.jpg" alt="villa" />
                    </div>
                    <div className={styles.cardText}>
                        <h3>Yacht Club</h3>
                        <div className={styles.icons}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaRegStar /></span>
                        </div>
                        <span>6,421 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Visit