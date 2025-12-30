import React from 'react'
import styles from './About.module.css'

const About = () => {

    const aboutItems = [
        {
            icon: "ri-global-line",
            title: "Global Reach",
            text: "Inspiring women across multiple countries"
        },
        {
            icon: "ri-award-line",
            title: "Recognition",
            text: "Featured across global platforms"
        },
        {
            icon: "ri-hourglass-line",
            title: "Late Start",
            text: "Started at 54, proof success has no limits"
        },
        {
            icon: "ri-flashlight-line",
            title: "Impact",
            text: "Challenging outdated narratives on aging"
        }
    ];
    return (
        <div id="about" className={styles.aboutContainer}>
            <div className={styles.aboutContent1}>
                <div className={styles.aboutText}>
                    <div className={styles.title}>
                        <h1>About Me</h1>
                        <hr />
                    </div>
                    <p>I’m Caroline Labouchere, a British-born <span>model</span>, wellness advocate, and lifestyle creator living life unapologetically and beautifully at <span>every age</span>. I began modelling at age 54, proving that confidence, curiosity, and joy don’t come with an<span>expiry date</span>.</p>


                </div>
                <div className={styles.aboutButtons}>
                    <button>Get In Touch</button>
                    <button>Portfolio</button>
                </div>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutGridItems}>
                        <div className={styles.header}>
                            {aboutItems.map((item, index) => ((
                                <div className={styles.item} key={index}>
                                    <div className={styles.header}>
                                        <i className={item.icon}></i>
                                        <h1>{item.title}</h1>

                                    </div>

                                    <p>{item.text}</p>
                                </div>
                            )))}

                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.aboutGridItem2}>
                <div className={styles.aboutImage}>
                    <img src="Images/Caroline_Images/about_img.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default About
