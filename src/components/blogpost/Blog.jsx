import React from 'react'
import styles from './Blog.module.scss'

const Blog = () => {
  return (
    <div className={styles.blogPost}>
        <div className={styles.container}>
            <div className={styles.blogPostText}>
                <h2>Recent Blog Post</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
            </div>
            <div className={styles.blogPostCards}>
                <div className={styles.blogPostCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_1.jpg" alt="blog post" />
                    </div>
                    <div className={styles.cardText}>
                        <span>FEBRUARY 26, 2018</span>
                        <h3>Five Reasons to Stay at Villa Resort</h3>
                    </div>
                </div>

                <div className={styles.blogPostCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_2.jpg" alt="blog post" />
                    </div>
                    <div className={styles.cardText}>
                        <span>FEBRUARY 26, 2018</span>
                        <h3>Five Reasons to Stay at Villa Resort</h3>
                    </div>
                </div>

                <div className={styles.blogPostCard}>
                    <div className={styles.cardImg}>
                        <img src="https://preview.colorlib.com/theme/villa/img/img_3.jpg" alt="blog post" />
                    </div>
                    <div className={styles.cardText}>
                        <span>FEBRUARY 26, 2018</span>
                        <h3>Five Reasons to Stay at Villa Resort</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog