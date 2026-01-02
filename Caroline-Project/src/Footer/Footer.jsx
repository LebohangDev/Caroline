
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { softFadeIn, softFadeUp, containerStagger } from '../animations';

const Footer = ({ setActiveNav }) => {
    return (
        <motion.div
            className={styles.footerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={softFadeIn}
        >
            <div className={styles.footerWrapper}>
                <motion.div
                    className={styles.footerContent}
                    variants={containerStagger}
                >
                    <motion.div className={styles.signatureContainer} variants={softFadeUp}>
                        <h1>@CGC</h1>
                    </motion.div>
                    <motion.div className={styles.media} variants={softFadeUp}>
                        <p>Media</p>
                        <motion.div className={styles.socialIcons} variants={containerStagger}>
                            <motion.i variants={softFadeIn} whileHover={{ scale: 1.1, rotate: 3 }} className="ri-instagram-line"></motion.i>
                            <motion.i variants={softFadeIn} whileHover={{ scale: 1.1, rotate: 3 }} className="ri-facebook-fill"></motion.i>
                            <motion.i variants={softFadeIn} whileHover={{ scale: 1.1, rotate: 3 }} className="ri-youtube-line"></motion.i>
                        </motion.div>
                    </motion.div>
                    <div className={styles.footerNav}>
                        <motion.ul variants={containerStagger}>
                            <motion.li variants={softFadeUp}><a href="#Home" onClick={() => setActiveNav('Home')}>Home</a></motion.li>
                            <motion.li variants={softFadeUp}><a href="#About" onClick={() => setActiveNav('About')}>About</a></motion.li>
                            <motion.li variants={softFadeUp}><a href="#Product" onClick={() => setActiveNav('Product')}>Product</a></motion.li>
                            <motion.li variants={softFadeUp}><a href="#Portfolio" onClick={() => setActiveNav('Portfolio')}>Portfolio</a></motion.li>
                            <motion.li variants={softFadeUp}><a href="#Gallery" onClick={() => setActiveNav('Gallery')}>Gallery</a></motion.li>
                        </motion.ul>
                    </div>
                </motion.div>

            </div>
            <motion.hr variants={softFadeIn} />
            <motion.p variants={softFadeIn}>© 2025 Caroline Labouchere. All rights reserved.| www.creatorsblueprint.net</motion.p>
        </motion.div>
    );
};

export default Footer;
