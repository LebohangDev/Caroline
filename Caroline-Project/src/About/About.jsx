import React from 'react'
import styles from './About.module.css'
import { motion } from 'framer-motion';
import { softFadeUp, containerStagger, lineReveal, buttonHover } from '../animations';

const About = () => {

    const aboutItems = [
        {
            icon: "ri-global-line",
            title: "Global Reach",
            text: "Inspiring women across multiple countries"
        },
        {
            icon: "ri-award-line",
            title: "Recognition",
            text: "Featured across global platforms"
        },
        {
            icon: "ri-hourglass-line",
            title: "Late Start",
            text: "Started at 54, proof success has no limits"
        },
        {
            icon: "ri-flashlight-line",
            title: "Impact",
            text: "Challenging outdated narratives on aging"
        }
    ];
    return (
        <motion.div
            id="about"
            className={styles.aboutContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerStagger}
        >
            <div className={styles.aboutContent1}>
                <div className={styles.aboutText}>
                    <div className={styles.title}>
                        <motion.h1 variants={softFadeUp}>About Me</motion.h1>
                        <motion.hr variants={lineReveal} />
                    </div>
                    <motion.p variants={softFadeUp}>I’m Caroline Labouchere, a British-born <span>model</span>, wellness advocate, and lifestyle creator living life unapologetically and beautifully at <span>every age</span>. I began modelling at age 54, proving that confidence, curiosity, and joy don’t come with an <span>expiry date</span>.</motion.p>


                </div>
                <motion.div className={styles.aboutButtons} variants={softFadeUp}>
                    <motion.button whileHover={buttonHover}>Get In Touch</motion.button>
                    <motion.button whileHover={buttonHover}>Portfolio</motion.button>
                </motion.div>
                <div className={styles.aboutGrid}>
                    <motion.div className={styles.aboutGridItems} variants={containerStagger}>
                        <div className={styles.header}>
                            {aboutItems.map((item, index) => ((
                                <motion.div className={styles.item} key={index} variants={softFadeUp}>
                                    <div className={styles.header}>
                                        <i className={item.icon}></i>
                                        <div className={styles.text}>
                                            <h1>{item.title}</h1>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )))}

                        </div>
                    </motion.div>
                </div>

            </div>
            <div className={styles.aboutContent2}>
                <motion.div
                    className={styles.aboutImage}
                    variants={softFadeUp}
                >
                    <img src="Images/Caroline_Images/about_img.png" alt="" />
                </motion.div>

            </div>
        </motion.div>
    )
}

export default About
