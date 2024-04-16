import YouTube, { YouTubeProps } from 'react-youtube'
import styles from '../css/video.module.css'

const VideoPage = () => {
    const opts: YouTubeProps['opts'] = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return (
        <>
            <a id="video"></a>
            <section className={`section ${styles.mission_section}`}>
                <div className={`content`}>
                    <span className={`section_subtitle`}>Watch Us</span>
                    <span className={`section_title`}>Get an overview of the platform at work</span>
                </div>
                <div className={styles.yt_container}>
                    <YouTube videoId="Ziw-ZXFlkW4" opts={opts} />
                </div>
            </section>
            <div className={`section_end ${styles.about_end}`}></div>
        </>
    )
}

export default VideoPage