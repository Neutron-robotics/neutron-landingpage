/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'react-responsive-carousel'
import styles from '../css/innovation.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Organization1Img from "../../public/screenshot/organization-1.png"
import Part1Img from "../../public/screenshot/part-1.png"
import Robot1Img from "../../public/screenshot/robot-1.png"
import Robot2Img from "../../public/screenshot/robot-2.png"

const InnovationPage = () => {
    return (
        <>
            <a id="innovation"></a>
            <section className={`section ${styles.innovation_section}`}>
                <div className={`content ${styles.content}`}>
                    <span className={`section_subtitle ${styles.mission_subtitle}`}>Services</span>
                    <span className={`${styles.section_title} section_title`}>A Platform For Encouraging Innovation</span>
                    <div>
                        <p>
                            In the ever-evolving world of robotics and Industry 4.0, it can be challenging to keep up with the latest
                            technologies and best practices. Our platform simplifies the development, real-time control, and service supervision
                            of robotic systems, allowing you to focus on what matters most: innovation.
                        </p>
                        <br />
                        <p>
                            With our user-friendly interface, you can easily create and manage teams, define robotic systems, and build custom dashboards.
                            Our platform is flexible and adaptable, supporting a wide range of robots and architectures.
                            Plus, our advanced features, such as AI integration and 3D visualization,
                            help you take your robotic solutions to the next level.
                        </p>
                        <br />
                        <p>
                            We believe that everyone should have access to powerful and affordable robotic tools.
                            That's why we offer a variety of pricing options to fit your needs, including a free version for occasional users.
                        </p>
                        <br />
                        <p>
                            Our goal is to empower you to achieve your robotic and Industry 4.0 goals.
                            With our platform, you can focus on the essential and leave the rest to us.
                        </p>
                    </div>
                </div>
                <div className={`${styles.carousel_container}`}>
                    <Carousel
                        emulateTouch
                        interval={6000}
                        showStatus={false}
                        showArrows
                        infiniteLoop
                        autoPlay
                        swipeable
                        showThumbs={false}
                    >
                        <div>
                            <Image
                                src={Organization1Img}
                                className={styles.carousel_img}
                                alt="shape"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                src={Robot1Img}
                                className={styles.carousel_img}
                                alt="shape"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                src={Robot2Img}
                                className={styles.carousel_img}
                                alt="shape"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div>
                            <Image
                                src={Part1Img}
                                className={styles.carousel_img}
                                alt="shape"
                                width={400}
                                height={400}
                            />
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default InnovationPage