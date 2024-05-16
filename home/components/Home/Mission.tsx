/* eslint-disable react/no-unescaped-entities */
import styles from '../css/mission.module.css'
import Image from "next/image";
import IcebergImg from '../../public/iceberg.svg'
import ShapeImg from "../../public/shape-1.svg"

const Mission = () => {
    return (
        <>
            <a id="mission"></a>
            <section className={`section ${styles.mission_section}`}>
                <div className={`${styles.iceberg_container}`}>
                    <Image
                        src={ShapeImg}
                        alt="shape"
                        height={200}
                        className={`${styles.home_bg_shape}`}
                    />
                    <Image
                        src={IcebergImg}
                        alt="shape"
                        height={800}
                        className={`${styles.home_iceberg_img}`}
                    />
                    <div className={`${styles.iceberg_labels}`}>
                        <div>
                            <span>Focus on:</span>
                            <ol>
                                <li>Planification</li>
                                <li>Hardware Conception</li>
                                <li>Buisness specifics</li>
                            </ol>
                        </div>
                        <div>
                            <span>While we take care of:</span>
                            <ol>
                                <li>Real Time Control</li>
                                <li>Supervision</li>
                                <li>Data Management</li>
                                <li>Performance Dashboards</li>
                                <li>Scaling</li>
                                <li>Predictive Maintenance</li>
                                <li>Team Functionnalities</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={`content ${styles.content}`}>
                    <span className={`section_subtitle`}>Our mission</span>
                    <span className={`${styles.section_title} section_title`}>We help you focus on the essential</span>
                    <div className='body_paragraph'>
                        <p>
                            Focus on innovation, growth, and delivering exceptional value with our streamlined platform. We offer comprehensive tools and services for every stage of your robotics journey, from planning to addressing specific business challenges.
                        </p>
                        <br />
                        <p>
                            Our intuitive interface ensures smooth operations and swift responses with real-time control and supervision of your robotic fleet.
                        </p>
                        <br />
                        <p>
                            Our data management solutions provide insights to optimize processes and enhance efficiency. Performance dashboards offer a clear view of key metrics and trends, helping you make data-driven decisions.
                        </p>
                        <br />
                        <p>
                            Our scalable platform grows with your business, adapting to changing demands. Predictive maintenance uses advanced analytics to anticipate issues, minimizing downtime and maximizing productivity.
                        </p>
                    </div>
                </div>
            </section>
            <div className={`section_end ${styles.about_end}`}></div>
        </>
    )
}

export default Mission