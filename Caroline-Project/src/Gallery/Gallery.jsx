import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from 'framer-motion';
import styles from './Gallery.module.css'
import { softFadeUp, containerStagger, imageReveal } from '../animations';

const Gallery = () => {
    const images = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <motion.section
            id="gallery"
            className={styles.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerStagger}
        >
            <motion.h1 variants={softFadeUp}>A Gallery of My Activities</motion.h1>

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {images.map((i) => (
                        <motion.div
                            className={styles.gridItem}
                            key={i}
                            variants={softFadeUp}
                            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        >
                            <img
                                src={`Images/Caroline_Images/gallery_${i}.jpg`}
                                alt={`Gallery activity ${i}`}
                                loading="lazy"
                                className={styles.galleryImage}
                            />
                        </motion.div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </motion.section>
    )
}

export default Gallery
