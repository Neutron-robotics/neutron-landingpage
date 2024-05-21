/* eslint-disable react/no-unescaped-entities */
import styles from '../css/mission.module.css'
import Image from "next/image";
import IcebergImg from '../../../public/iceberg.svg'
import ShapeImg from "../../../public/shape-1.svg"
import { useTranslations } from 'next-intl';

const Mission = () => {
    const t = useTranslations('Mission');

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
                            <span>{t('focusOn')}</span>
                            <ol>
                                <li>{t('planning')}</li>
                                <li>{t('hardwareConception')}</li>
                                <li>{t('businessSpecifics')}</li>
                            </ol>
                        </div>
                        <div>
                            <span>{t('weTakeCareOf')}</span>
                            <ol>
                                <li>{t('realTimeControl')}</li>
                                <li>{t('supervision')}</li>
                                <li>{t('dataManagement')}</li>
                                <li>{t('performanceDashboards')}</li>
                                <li>{t('scaling')}</li>
                                <li>{t('predictiveMaintenance')}</li>
                                <li>{t('teamFunctionalities')}</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={`content ${styles.content}`}>
                    <span className={`section_subtitle`}>{t('ourMission')}</span>
                    <span className={`${styles.section_title} section_title`}>{t('focusOnEssential')}</span>
                    <div className='body_paragraph'>
                        <p>
                            {t('introParagraph')}
                        </p>
                        <br />
                        <p>
                            {t('secondParagraph')}
                        </p>
                        <br />
                        <p>
                            {t('thirdParagraph')}
                        </p>
                        <br />
                        <p>
                            {t('fourthParagraph')}
                        </p>
                    </div>
                </div>
            </section>
            <div className={`section_end ${styles.about_end}`}></div>
        </>
    )
}

export default Mission