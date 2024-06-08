import { IconButton, TextField } from '@mui/material'
import styles from '../css/footer.module.css'
import NeutronLogo from "../../../public/neutron-logo.png"
import DiscordLogo from "../../../public/discord-icon.svg"
import FrLogo from "../../../public/fr.png"
import UsLogo from "../../../public/us.png"
import XLogo from "../../../public/x-icon.svg"
import Image from "next/image";
import { useState } from 'react'
import { subscribeNewsletter } from '@/api/website'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Footer = () => {
    const t = useTranslations('Footer');
    const [email, setEmail] = useState('');

    async function handleSubscribeClick(): Promise<void> {
        try {
            await subscribeNewsletter(email);
            window.location.href = window.location.pathname + '#home';
            window.location.reload();
        } catch (err: any) {
            console.log('newsletter api error', err);
        }
    }

    return (
        <>
            <a id="footer"></a>
            <section className={`section ${styles.footer_section}`}>
                <span className={`section_title ${styles.footer_title}`}>{t('subscribeTitle')}</span>
                <div className={styles.fullWidth}>
                    <div className={styles.form}>
                        <TextField
                            sx={{ backgroundColor: 'white', borderRadius: '10px' }}
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            id="outlined-basic"
                            placeholder={t('emailPlaceholder')}
                        />
                        <a onClick={handleSubscribeClick} className={`${styles.button} button`}>
                            <p>{t('subscribeButton')}</p>
                        </a>
                    </div>
                    <div className={styles.footer_brand}>
                        <Image src={NeutronLogo} alt="logo" width={205} height={35} />
                        <div>
                            <Link href="/fr">
                                <IconButton color="primary" aria-label="French Flag">
                                    <Image src={FrLogo} alt="fr" height={20} />
                                </IconButton>
                            </Link>
                            <Link href="/en">
                                <IconButton color="primary" aria-label="US Flag">
                                    <Image src={UsLogo} alt="us" height={20} />
                                </IconButton>
                            </Link>
                        </div>
                        <div>
                            <a className={styles.not_button} href="#home">{t('nav.home')}</a>
                            <a className={styles.not_button} href="#innovation">{t('nav.service')}</a>
                            <a className={styles.not_button} href={process.env.NEXT_PUBLIC_NEUTRON_DOCS}>{t('nav.documentation')}</a>
                            <a className={styles.not_button} href="#blog">{t('nav.blog')}</a>
                        </div>
                    </div>
                    <div className={styles.separation} />
                    <div className={styles.footer_brand}>
                        <span>{t('copyright')}</span>
                        <div>
                            <a target="_blank" href="https://x.com/hug0perier">
                                <Image src={XLogo} alt="Xlogo" width={25} height={25} />
                            </a>
                            <a target="_blank" href="https://discord.gg/Sy2Hj9gFVq">
                                <Image src={DiscordLogo} alt="Discordlogo" width={25} height={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer