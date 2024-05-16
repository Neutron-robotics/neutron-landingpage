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
                    <div className='body_paragraph'>
                        <p>
                            Keeping up with robotics and Industry 4.0 can be tough. Our platform simplifies development, control, and supervision, letting you focus on innovation.
                        </p>
                        <br />
                        <p>
                            Easily create and manage teams, define robotic systems, and build custom dashboards. Our flexible platform supports various robots and architectures.
                        </p>
                        <br />
                        <p>
                            Our advanced features, like AI integration and 3D visualization, help take your robotic solutions to the next level.
                        </p>
                        <br />
                        <p>
                            Our goal is to empower you to achieve your robotic and Industry 4.0 goals. Focus on the essential and leave the rest to us.
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