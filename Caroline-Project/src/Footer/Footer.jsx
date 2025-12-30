
import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ setActiveNav }) => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContent}>
                    <div className={styles.signatureContainer}>
                        <h1>@CGC</h1>
                    </div>
                    <div className={styles.media}>
                        <p>Media</p>
                        <div className={styles.socialIcons}>
                            <i className="ri-instagram-line" style={{ color: 'var(--accent-primary)' }}></i>
                            <i className="ri-linkedin-fill" style={{ color: 'var(--accent-primary)' }}></i>
                            <i className="ri-youtube-line" style={{ color: 'var(--accent-primary)' }}></i>
                        </div>
                    </div>
                    <div className={styles.footerNav}>
                        <ul>
                            <li><a href="#Home" onClick={() => setActiveNav('Home')}>Home</a></li>
                            <li><a href="#About" onClick={() => setActiveNav('About')}>About</a></li>
                            <li><a href="#Product" onClick={() => setActiveNav('Product')}>Product</a></li>
                            <li><a href="#Portfolio" onClick={() => setActiveNav('Portfolio')}>Portfolio</a></li>
                            <li><a href="#Gallery" onClick={() => setActiveNav('Gallery')}>Gallery</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <p>© 2025 Caroline Labouchere. All rights reserved.| www.creatorsblueprint.net</p>




        </div>
    );
};

export default Footer;
