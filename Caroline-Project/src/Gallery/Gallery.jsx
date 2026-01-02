import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import styles from './Gallery.module.css'

const Gallery = () => {
    const images = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <section id="gallery" className={styles.container}>
            <h1>A Gallery of My Activities</h1>
            
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {images.map((i) => (
                        <div className={styles.gridItem} key={i}>
                            <img 
                                src={`Images/Caroline_Images/gallery_${i}.jpg`} 
                                alt={`Gallery activity ${i}`} 
                                loading="lazy"
                                className={styles.galleryImage}
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    )
}

export default Gallery
