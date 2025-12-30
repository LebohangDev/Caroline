import React from 'react'
import styles from './Product.module.css'

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

const Product = () => {



    return (
        <div id="product" className={styles.productContainer}>
            <div className={styles.section1}>
                <div className={styles.productContent1}>
                    <div className={styles.productImage}>
                        <img src="Images/Caroline_Images/product_img.png" alt="" />
                    </div>
                </div>

                <div className={styles.productContent2}>
                    <div className={styles.productText}>
                        <p>EBOOK</p>
                        <div className={styles.title}>
                            <h1>Becoming Visible at Any Age</h1>
                        </div>
                        <p>guide to owning your presence, personal style, and confidence, no matter where you are in life</p>

                    </div>
                    <div className={styles.productEmailField}>
                        <input type="text" placeholder="Enter your email" />
                        <button>GET STARTED NOW!</button>
                    </div>
                    <div className={styles.priceContainer}>
                        <h1>Price</h1>
                        <p>$15</p>
                        <p>After payment, eBook will be sent to given email</p>
                    </div>
                </div>

            </div>
            <div className={styles.section2}>
                <div className={styles.title}>
                    <h1>About the book</h1>
                    <p>Inside the Pages: Confidence, Visibility, and Self-Expression</p>
                </div>
                <div className={styles.videoContainer}>
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0"></iframe>
                </div>
                <div className={styles.bookGrid}>
                    <div className={styles.bookGridItems}>
                        {bookLearnings.map((item, index) => (
                            <div className={styles.bookGridItem} key={index}>
                                <img src={item.svg} alt={item.title} />
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product
