import styles from './Home.module.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { softFadeUp, containerStagger, softFadeIn, buttonHover } from '../animations';




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
        setCurrentIndex((c => (c + 1)))
        console.log(currentIndex)
        if (currentIndex === homeItems.length - 1) {
            setCurrentIndex(homeItems.length - 1)
        }



    }

    const scrollLeft = () => {
        setCurrentIndex((c => (c - 1)))
        if (currentIndex === 0) {
            setCurrentIndex(0)
        }
        console.log(currentIndex)
    }


    return (
        <div id="home" className={styles.homecontainer}>
            <div className={styles.homecontent1}>
                <motion.div
                    className={styles.imgContainer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className={styles.imgItems}>
                        {homeItems.map((item, index) => (
                            <motion.div
                                className={styles.imgItem}
                                key={index}
                                animate={{ x: `-${currentIndex * 100}%` }}
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            >
                                <img src={item.img} alt="" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <div className={styles.imgControls}>
                    <div className={styles.imgButtons}>
                        <button onClick={scrollLeft} className='leftArrow'><i className="ri-arrow-left-s-line"></i></button>
                        <button onClick={scrollRight} className='rightArrow'><i className="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
            </div>
            <motion.div
                className={styles.homecontent2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerStagger}
            >
                <div className={styles.homeText}>
                    <motion.div className={styles.keywords} variants={softFadeUp}>
                        <p>HEALTH</p>
                        <p>BEAUTY</p>
                        <p>FASHION</p>
                        <p>ICON</p>
                    </motion.div>
                    <div className={styles.name}>
                        <motion.h1 variants={softFadeUp}>Caroline</motion.h1>
                        <motion.h1 variants={softFadeUp}>Labouchere</motion.h1>
                    </div>

                    <motion.div className={styles.homeButtons} variants={softFadeUp}>
                        <motion.button className={styles.homeButton1} whileHover={buttonHover}>Learn More</motion.button>
                        <motion.button className={styles.homeButton2} whileHover={buttonHover}>BUY PRODUCT</motion.button>
                    </motion.div>
                </div>
                <div className={styles.homeSocials}>
                    <hr className={styles.line1} />
                    <motion.div className={styles.socialsContainer} variants={containerStagger}>
                        <motion.i variants={softFadeIn} className="ri-instagram-line"></motion.i>
                        <motion.i variants={softFadeIn} className="ri-youtube-line"></motion.i>
                        <motion.i variants={softFadeIn} className="ri-facebook-circle-fill"></motion.i>
                    </motion.div>
                    <hr className={styles.line2} />
                </div>
            </motion.div>
        </div>
    )
}

export default Home
