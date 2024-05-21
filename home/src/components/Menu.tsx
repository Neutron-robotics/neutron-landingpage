import Link from 'next/link'
import styles from './css/menu.module.css'
import { IconButton } from '@mui/material'
import FrLogo from "../../public/fr.png"
import UsLogo from "../../public/us.png"
import Image from "next/image";

interface MenuProps {
    onMenuClick: (active: boolean) => void
    menuIn: boolean
}

const Menu = (props: MenuProps) => {
    const {
        onMenuClick,
        menuIn
    } = props

    return (
        <div className={styles.menu_div} style={{
            transform: menuIn ? 'translateX(0px)' : 'translateX(clamp(0px, 100%, 400px))',
            boxShadow: menuIn ? '-10px 0px 30px rgba(0, 0, 0, 0.7)' : 'none'
        }}>
            <svg className={styles.menu_icon} onClick={() => onMenuClick(false)} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="10" x2="90" y2="90" />
                <line x1="10" y1="90" x2="90" y2="10" />
            </svg>
            <div className={styles.menu}>
                <ol>
                    <li className={styles.home}><a onClick={() => onMenuClick(false)} className={styles.not_button} href="#home">Home</a></li>
                    <li className={styles.about}><a onClick={() => onMenuClick(false)} className={styles.not_button} href="#service">Service</a></li>
                    <li className={styles.projects}><a onClick={() => onMenuClick(false)} className={styles.not_button} href="#documentation">Documentation</a></li>
                    <li className={styles.skills}><a onClick={() => onMenuClick(false)} className={styles.not_button} href="#blog">Blog</a></li>
                    <li className={styles.experience}><a onClick={() => onMenuClick(false)} className={styles.not_button} href="#contact">Contact Us</a></li>
                    <li className={styles.contact}>
                        <a className={styles.button} onClick={() => onMenuClick(false)} href="#access">
                            <p>Access Application</p>
                            <svg className={styles.button_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.69 17.39"><g>
                                <path className={styles.path_1} d="M8.9 12.4 L8.9 12.4" />
                                <path className={styles.path_2} d="M16.2 5 8.9 12.4 1.5 5" /></g>
                            </svg>
                        </a>
                    </li>
                </ol>
                <div className={styles.languages}>
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
            </div>
        </div>
    )
}

export default Menu