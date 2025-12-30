import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import styles from './Gallery.module.css'

const Gallery = () => {
    return (
        <div id="gallery" className={styles.container}>
            <h2>A Gallery of My Activities</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div className={styles.gridItem} key={i}>
                            <img src={`Images/Caroline_Images/gallery_${i}.jpg`} alt={`Gallery ${i}`} style={{ width: "100%", display: "block" }} />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default Gallery
