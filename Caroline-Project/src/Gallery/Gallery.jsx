import React, { useMemo } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { motion } from 'framer-motion';
import styles from './Gallery.module.css'
import { softFadeUp, containerStagger } from '../animations';

const Gallery = () => {
    // Memoize images so the array reference stays stable
    const images = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);

    return (
        <section id="gallery" className={styles.container}>
            <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={softFadeUp}
            >
                A Gallery of My Activities
            </motion.h1>

            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {images.map((i) => (
                        <div className={styles.gridItem} key={i}>
                            {/* Move the animation INSIDE the grid item wrapper */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={softFadeUp}
                                whileHover={{ scale: 1.03 }}
                                className={styles.animationWrapper}
                            >
                                <img
                                    src={`Images/Caroline_Images/gallery_${i}.jpg`}
                                    alt={`Gallery activity ${i}`}
                                    loading="lazy"
                                    className={styles.galleryImage}
                                    // Key trick: force image to re-evaluate on layout changes
                                    key={`img-${i}`} 
                                />
                            </motion.div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Gallery
