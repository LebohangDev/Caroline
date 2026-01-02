import React from 'react'
import { motion } from 'framer-motion'
import styles from './test.module.css'

const bookLearnings =
    [
        {
            svg: "Images/Icons/book_icon1.svg", // replace with your SVG import or path
            title: "Claim Your Visibility",
            text: "How to stop fading into the background and confidently take up space at every stage of life."
        },
        {
            svg: "Images/Icons/book_icon2.svg",
            title: "Rewrite the Narrative",
            text: "How to unlearn age-based limits and reframe experience as power, not decline."
        },
        {
            svg: "Images/Icons/book_icon3.svg",
            title: "Intentional Style",
            text: "How personal style becomes a tool for visibility, presence, and self-respect, not trends."
        },
        {
            svg: "Images/Icons/book_icon4.svg",
            title: "Own Your Next Chapter",
            text: "How to show up boldly, speak confidently, and move forward without apology, at any age."
        }
    ];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const Product = () => {
  return (
    <div id="product" className={styles.productContainer}>

      {/* SECTION 1 */}
      <motion.div
        className={styles.section1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.div className={styles.productContent1} variants={fadeUp}>
          <motion.div
            className={styles.productImage}
            // whileHover={{ scale: 1.02 }}
            // transition={{ duration: 0.3 }}
          >
            <img src="Images/Caroline_Images/ebook_cover2.png" alt="Ebook cover" />
          </motion.div>
        </motion.div>

        <motion.div className={styles.productContent2} variants={fadeUp}>
          <div className={styles.productText}>
            <p>E-BOOK</p>
            <div className={styles.title}>
              <h1>Becoming Visible at Any Age</h1>
            </div>
            <p>A guide to owning your presence, personal style, and confidence, no matter where you are in life</p>
          </div>

          <motion.div className={styles.productEmailField} variants={fadeUp}>
            <input type="text" placeholder="Enter your email" />
            <button>GET STARTED NOW!</button>
          </motion.div>

          <motion.div className={styles.priceContainer} variants={fadeUp}>
            <h1>Price</h1>
            <p>$15</p>
            <p>After payment, eBook will be sent to given email</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SECTION 2 */}
      <motion.div
        className={styles.section2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className={styles.title}>
          <h1>About the book</h1>
          <p>Inside the Pages: Confidence, Visibility, and Self-Expression</p>
        </div>

        <motion.div className={styles.videoContainer} variants={fadeUp}>
          <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Book intro video" frameBorder="0"></iframe>
        </motion.div>

        <motion.div
          className={styles.bookGridItems}
          variants={stagger}
        >
          {bookLearnings.map((item, index) => (
            <motion.div
              className={styles.bookGridItem}
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <img src={item.svg} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </div>
  )
}

export default Product
