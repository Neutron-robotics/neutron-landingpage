/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'react-responsive-carousel'
import styles from '../css/innovation.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Organization1Img from "../../../public/screenshot/organization-1.png"
import Part1Img from "../../../public/screenshot/part-1.png"
import Robot1Img from "../../../public/screenshot/robot-1.png"
import Robot2Img from "../../../public/screenshot/robot-2.png"
import { useTranslations } from 'next-intl';

const InnovationPage = () => {
    const t = useTranslations('Innovation');
  
    return (
      <>
        <a id="innovation"></a>
        <section className={`section ${styles.innovation_section}`}>
          <div className={`content ${styles.content}`}>
            <span className={`section_subtitle ${styles.mission_subtitle}`}>{t('services')}</span>
            <span className={`${styles.section_title} section_title`}>{t('platformTitle')}</span>
            <div className='body_paragraph'>
              <p>
                {t('paragraph1')}
              </p>
              <br />
              <p>
                {t('paragraph2')}
              </p>
              <br />
              <p>
                {t('paragraph3')}
              </p>
              <br />
              <p>
                {t('paragraph4')}
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
                  alt="organization"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <Image
                  src={Robot1Img}
                  className={styles.carousel_img}
                  alt="robot 1"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <Image
                  src={Robot2Img}
                  className={styles.carousel_img}
                  alt="robot 2"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <Image
                  src={Part1Img}
                  className={styles.carousel_img}
                  alt="part 1"
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