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
                    <span className={`section_subtitle ${styles.mission_subtitle}`}>Our mission</span>
                    <span className={`${styles.section_title} section_title`}>We help you focus on the essential</span>
                    <div>
                        <p className={`${styles.p_1}`}>
                            In the fast-paced world of robotics and Industry 4.0, your focus should be on innovation, growth, and delivering exceptional value to your customers. That's where we come in. Our platform is designed to streamline your operations and empower you to concentrate on what truly matters: bringing your vision to life.
                            When you partner with us, you gain access to a comprehensive suite of tools and services that cover every aspect of your robotics journey. From initial planning and hardware design to addressing business-specific challenges, we've got you covered. Our platform acts as a solid foundation, allowing you to build upon it with confidence, knowing that the intricate details are taken care of.
                        </p>
                        <br />
                        <p>
                            Real-time control and supervision are at the heart of what we offer. With our intuitive interface and powerful capabilities, you can monitor and manage your robotic fleet effortlessly, ensuring smooth operations and swift responses to any changes or challenges that arise.
                        </p>
                        <br />
                        <p>
                            But it doesn't stop there. We understand the importance of data in driving informed decision-making and improving performance. Our robust data management solutions provide you with the insights you need to optimize your processes, enhance efficiency, and stay ahead of the curve.
                            Performance dashboards offer a bird's-eye view of your operations, giving you valuable insights into key metrics and trends. With this information at your fingertips, you can identify areas for improvement and make data-driven decisions with confidence.
                        </p>
                        <br />
                        <p>
                            As your business grows, scalability becomes increasingly important. Our platform is designed to grow with you, providing the flexibility and scalability you need to expand your operations seamlessly and adapt to changing demands.
                        </p>
                        <br />
                        <p>
                            Predictive maintenance is another key feature of our platform. By leveraging advanced analytics and machine learning algorithms, we can anticipate potential issues before they occur, minimizing downtime and maximizing productivity.
                        </p>
                        <div className={`${styles.photo}`} >
                        </div>
                    </div>
                </div>
            </section>
            <div className={`section_end ${styles.about_end}`}></div>
        </>
    )
}

export default Mission