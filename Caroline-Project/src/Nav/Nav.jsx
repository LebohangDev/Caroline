import React from 'react'
import styles from './Nav.module.css'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { navVariants, softFadeUp } from '../animations';

const Nav = ({ activeNav, setActiveNav }) => {
    const [hamMenu, setHamMenu] = useState(false);
    return (

        <>
            <motion.nav
                className={styles.nav}
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <motion.p variants={softFadeUp}> <a href="https://www.cgc.global/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnwqk8vDHLqIurIWtwfHKp5lbPLKoBL9Zny0WzgCVrEzTeOBDQKMgEYXQHQqA_aem_rPG_qT-JKK24nZT54iJijg">@CGC</a></motion.p>
                <motion.ul variants={navVariants}>
                    <motion.li variants={softFadeUp} className={activeNav === 'Home' ? styles.active : ''}>
                        <a href="#home" onClick={() => setActiveNav('Home')}>Home</a>
                    </motion.li>
                    <motion.li variants={softFadeUp} className={activeNav === 'About' ? styles.active : ''}>
                        <a href="#about" onClick={() => setActiveNav('About')}>About</a>
                    </motion.li>
                    <motion.li variants={softFadeUp} className={activeNav === 'Product' ? styles.active : ''}>
                        <a href="#product" onClick={() => setActiveNav('Product')}>Product</a>
                    </motion.li>
                    <motion.li variants={softFadeUp} className={activeNav === 'Portfolio' ? styles.active : ''}>
                        <a href="Images/Portfolio/My_Portfolio_Caroline_Labouchere.pdf" download onClick={() => setActiveNav('Portfolio')}>Portfolio</a>
                    </motion.li>
                    <motion.li variants={softFadeUp} className={activeNav === 'Gallery' ? styles.active : ''}>
                        <a href="#gallery" onClick={() => setActiveNav('Gallery')}>Gallery</a>
                    </motion.li>

                </motion.ul>
            </motion.nav>
            <div className={styles.hamburgerContainer}>
                <div className={styles.hamHeader}>
                    <div className={styles.hamTitle}>
                        <p>@CGC</p>
                    </div>
                    <i className="ri-menu-3-fill" onClick={(e) => { e.preventDefault(); setHamMenu(true) }}></i>


                </div>

                <AnimatePresence>
                    {hamMenu === true ? (
                        <motion.div
                            className={styles.hamMenuActive}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className={styles.close}>
                                <i className="ri-close-fill" onClick={(e) => { e.preventDefault(); setHamMenu(false) }}></i>
                            </div>

                            <ul>
                                <li className={activeNav === 'Home' ? styles.active : ''}>
                                    <a href="#home" onClick={() => { setActiveNav('Home'); setHamMenu(false) }}>Home</a>
                                </li>
                                <li className={activeNav === 'About' ? styles.active : ''}>
                                    <a href="#about" onClick={() => { setActiveNav('About'); setHamMenu(false) }}>About</a>
                                </li>
                                <li className={activeNav === 'Product' ? styles.active : ''}>
                                    <a href="#product" onClick={() => { setActiveNav('Product'); setHamMenu(false) }}>Product</a>
                                </li>
                                <li className={activeNav === 'Portfolio' ? styles.active : ''}>
                                    <a href="Images/Portfolio/My_Portfolio_Caroline_Labouchere.pdf" download onClick={() => { setActiveNav('Portfolio'); setHamMenu(false) }}>Portfolio</a>
                                </li>
                                <li className={activeNav === 'Gallery' ? styles.active : ''}>
                                    <a href="#gallery" onClick={() => { setActiveNav('Gallery'); setHamMenu(false) }}>Gallery</a>
                                </li>

                            </ul>

                            <div className={styles.media}>

                                <h1>
                                    Media
                                </h1>

                                <div className={styles.socials}>
                                    <i className="ri-instagram-line" style={{ color: 'var(--accent-primary)' }}></i>
                                    <i className="ri-linkedin-fill" style={{ color: 'var(--accent-primary)' }}></i>
                                </div>
                            </div>

                            <div className={styles.copyright}>
                                <p>
                                    © 2025 CreatorsBlueprint. All rights reserved. | www.creatorsblueprint.com
                                </p>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

        </>



    )
}

export default Nav
