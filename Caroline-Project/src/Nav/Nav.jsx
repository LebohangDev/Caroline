import React from 'react'
import styles from './Nav.module.css'

const Nav = ({ activeNav, setActiveNav }) => {
    return (
        <nav className={styles.nav}>
            <p>@CGC</p>
            <ul>
                <li className={activeNav === 'Home' ? styles.active : ''}>
                    <a href="#home" onClick={() => setActiveNav('Home')}>Home</a>
                </li>
                <li className={activeNav === 'About' ? styles.active : ''}>
                    <a href="#about" onClick={() => setActiveNav('About')}>About</a>
                </li>
                <li className={activeNav === 'Product' ? styles.active : ''}>
                    <a href="#product" onClick={() => setActiveNav('Product')}>Product</a>
                </li>
                <li className={activeNav === 'Portfolio' ? styles.active : ''}>
                    <a href="#portfolio" download={true} onClick={() => setActiveNav('Portfolio')}>Portfolio</a>
                </li>
                <li className={activeNav === 'Gallery' ? styles.active : ''}>
                    <a href="#gallery" onClick={() => setActiveNav('Gallery')}>Gallery</a>
                </li>

            </ul>
        </nav>
    )
}

export default Nav
