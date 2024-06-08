'use client'

import styles from '../css/home.module.css'
import { MutableRefObject, forwardRef, useEffect, useRef, useState } from "react";
import { sleep } from "@/utils/time";
import { inViewPort } from "@/utils/dom";
import useOnScreen from "@/utils/useOnScreen";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import ParticleConfig from "../../../public/json/particles.json"
import ShapeImg from "../../../public/shape-1.svg"
import NeutronIconImg from "../../../public/neutron-icon.svg"
import SpeedImg from "../../../public/speed.svg"
import HandshakeImg from "../../../public/handshake.svg"
import AnalyticsImg from "../../../public/analytics.svg"
import NodeImg from "../../../public/node.svg"
import { loadBasic } from "@tsparticles/basic";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HomeProps {
    homeRef: MutableRefObject<HTMLElement>
}

// eslint-disable-next-line react/display-name
const Homepage = forwardRef((props: HomeProps, ref: any) => {
    const [initParticles, setInitParticles] = useState(false);
    const t = useTranslations('Index');
    const {
        homeRef
    } = props

    const targetRef = useRef<any>(null);

    async function homeAnimations() {
        await sleep(500);
        const elements = document.querySelectorAll(`.${styles.home_section} .in_animation`) as any;
        const section = document.querySelector(`.${styles.home_section}`) as any;

        if (inViewPort(section)) {
            for (const i of elements) {
                i.style.opacity = '1';
                i.style.transform = 'translateY(0)';
                await sleep(300);
            }
        }
    }
    const [onScreenOffset, setOnScreenOffset] = useState(true)
    const onScreen = useOnScreen<HTMLDivElement>(targetRef, onScreenOffset ? "-300px" : '0px');

    useEffect(() => {
        setOnScreenOffset(window.innerWidth > 600)
    }, [])

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadBasic(engine);
        }).then(() => {
            setInitParticles(true);
        });
    }, []);

    useEffect(() => {
        if (onScreen)
            homeAnimations();
    }, [onScreen])

    return (
        <>
            <a id="home"></a>
            <section className={`section ${styles.home_section}`} ref={homeRef}>
                {initParticles && (
                    <Particles id="particles" options={ParticleConfig as any} />
                )}
                <div className={`${styles.container}`}>
                    <div className={`${styles.text_content}`} ref={targetRef}>
                        <span className={`${styles.name} in_animation`}>{t('title')}</span>
                        <p className={`in_animation ${styles.intro}`}>
                            {t('intro')}
                        </p>
                        <div className={`in_animation`}>
                            <a className={`button ${styles.home_button}`} href="#mission">
                                <p>{t('getStarted')}</p>
                                <svg className={`button_arrow`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.69 17.39"><g>
                                    <path className={`path_1`} d="M8.9 12.4 L8.9 12.4" />
                                    <path className={`path_2`} d="M16.2 5 8.9 12.4 1.5 5" />
                                </g></svg>
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.text_content}`}>
                        <div
                            className={styles.home_shapes_container}
                        >
                            <Image
                                src={ShapeImg}
                                alt="shape"
                                className={`${styles.home_centered_img} ${styles.home_bg_shape}`}
                            />
                            <span className={`${styles.home_centered_img} ${styles.home_logo}`}>
                                <Image
                                    src={NeutronIconImg}
                                    alt="neutron"
                                />
                            </span>

                            <span className={`${styles.home_shape} ${styles.speed_shape}`}>
                                <Image
                                    src={SpeedImg}
                                    alt="speed"
                                />
                            </span>
                            <span className={`${styles.home_shape} ${styles.handshake_shape}`}>
                                <Image
                                    src={HandshakeImg}
                                    alt="handshake"
                                />
                            </span>
                            <span className={`${styles.home_shape} ${styles.analytics_shape}`}>
                                <Image
                                    src={AnalyticsImg}
                                    alt="analytics"
                                />
                            </span>
                            <span className={`${styles.home_shape} ${styles.node_shape}`}>
                                <Image
                                    src={NodeImg}
                                    alt="node"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
})

export default Homepage
