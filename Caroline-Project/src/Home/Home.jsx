import React from 'react'
import styles from './Home.module.css'

const Home = () => {

    return (
        <div id="home" className={styles.homecontainer}>
            <div className={styles.homecontent1}>
                <div className={styles.imgContainer}>
                    <div className={styles.imgItems}>
                        <img src="Images/Caroline_Images/hero_img1.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.imgControls}>
                    <div className={styles.imgButtons}>
                        <button className='leftArrow'><i class="ri-arrow-left-s-line"></i></button>
                        <button className='rightArrow'><i class="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
            </div>
            <div className={styles.homecontent2}>
                <div className={styles.homeText}>
                    <div className={styles.keywords}>
                        <p>HEALTH</p>
                        <p>BEAUTY</p>
                        <p>FASHION</p>
                        <p>ICON</p>
                    </div>
                    <div className={styles.name}>
                        <h1>Caroline</h1>
                        <h1>Labouchere</h1>
                    </div>

                    <div className={styles.homeButtons}>
                        <button className={styles.homeButton1}>Learn More</button>
                        <button className={styles.homeButton2}>BUY PRODUCT</button>
                    </div>
                </div>
                <div className={styles.homeSocials}>
                    <hr className={styles.line1} />
                    <div className={styles.socialsContainer}>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-youtube-line"></i>
                        <i class="ri-facebook-line"></i>
                    </div>
                    <hr className={styles.line2} />
                </div>
            </div>
        </div>
    )
}

export default Home
