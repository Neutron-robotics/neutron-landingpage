import { TextField } from '@mui/material'
import styles from '../css/footer.module.css'
import NeutronLogo from "../../public/neutron-logo.png"
import DiscordLogo from "../../public/discord-icon.svg"
import XLogo from "../../public/x-icon.svg"
import Image from "next/image";
import { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('')


    function handleSubscribeClick(): void {
        window.location.href = window.location.pathname + '#home';
        window.location.reload();
    }

    return (
        <>
            <a id="footer"></a>
            <section className={`section ${styles.footer_section}`}>
                <span className={`section_title ${styles.footer_title}`}>Subscribe To Our Newsletter For Latest Update</span>
                <div className={styles.fullWidth}>
                    <div className={styles.form}>
                        <TextField sx={{
                            backgroundColor: 'white',
                            borderRadius: '10px'
                        }}
                            fullWidth
                            onChange={e => setEmail(e.target.value)}
                            id="outlined-basic"
                            placeholder='Enter your email'
                        />
                        <a onClick={handleSubscribeClick} className={`${styles.button} button`} >
                            <p>Subscribe Now</p>
                        </a>
                    </div>
                    <div className={styles.footer_brand}>
                        <Image src={NeutronLogo} alt="logo" width={205} height={35} />
                        <div>
                            <a className={styles.not_button} href="#home">Home</a>
                            <a className={styles.not_button} href="#innovation">Service</a>
                            <a className={styles.not_button} href="#documentation">Documentation</a>
                            <a className={styles.not_button} href="#blog">Blog</a>
                        </div>
                    </div>
                    <div className={styles.separation} />
                    <div className={styles.footer_brand}>
                        <span>Copyright 2024 Neutron Robotics. All right reserved.</span>
                        <div>
                            <a target='_blank' href="https://x.com/hug0perier">
                                <Image src={XLogo} alt="Xlogo" width={25} height={25} />
                            </a>
                            <a target='_blank' href="https://discord.gg/Sy2Hj9gFVq">
                                <Image src={DiscordLogo} alt="Discordlogo" width={25} height={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer