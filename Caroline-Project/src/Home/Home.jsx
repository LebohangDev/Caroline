import styles from './Home.module.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';




const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);



    const homeItems = [
        {
            img: "Images/Caroline_Images/hero_img1.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_1.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_2.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_3.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_4.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_5.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_6.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_7.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_8.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_9.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_10.jpg",
        },
        {
            img: "Images/Caroline_Images/gallery_11.jpg",
        },
    ]


    const scrollRight = () => {
        setCurrentIndex((c => (c + 1) % homeItems.length))
        console.log(currentIndex)

    }

    const scrollLeft = () => {
        setCurrentIndex((c => (c - 1) % homeItems.length))
        console.log(currentIndex)
    }


    return (
        <div id="home" className={styles.homecontainer}>
            <div className={styles.homecontent1}>
                <div className={styles.imgContainer}>
                    <div className={styles.imgItems}>
                        <AnimatePresence>
                            {homeItems.map((item, index) => (
                                <motion.img
                                    initial={{ x: 0, opacity: 0 }}
                                    animate={{ x: currentIndex * -100, opacity: 1 }}
                                    exit={{ x: -700, opacity: 0 }}
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    key={item.img}
                                    src={item.img}
                                    alt=""
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className={styles.imgControls}>
                    <div className={styles.imgButtons}>
                        <button onClick={scrollLeft} className='leftArrow'><i class="ri-arrow-left-s-line"></i></button>
                        <button onClick={scrollRight} className='rightArrow'><i class="ri-arrow-right-s-line"></i></button>
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
                        <i className="ri-instagram-line"></i>
                        <i className="ri-youtube-line"></i>
                        <i className="ri-facebook-circle-fill"></i>
                    </div>
                    <hr className={styles.line2} />
                </div>
            </div>
        </div>
    )
}

export default Home
