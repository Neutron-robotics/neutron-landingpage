import YouTube, { YouTubeProps } from 'react-youtube'
import styles from '../css/video.module.css'
import { useTranslations } from 'next-intl';

const VideoPage = () => {
    const t = useTranslations('Video');
    const opts: YouTubeProps['opts'] = {
      playerVars: {
        autoplay: 0,
      },
    };
  
    return (
      <>
        <a id="video"></a>
        <section className={`section ${styles.mission_section}`}>
          <div className={`content`}>
            <span className={`section_subtitle`}>{t('watchUs')}</span>
            <span className={`section_title`}>{t('overview')}</span>
          </div>
          <div className={styles.yt_container}>
            <YouTube videoId="Ziw-ZXFlkW4" opts={opts} />
          </div>
        </section>
        <div className={`section_end ${styles.about_end}`}></div>
      </>
    );
  }

export default VideoPage