'use client'

import { sleep } from "@/utils/time";
import Image from "next/image";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import styles from './css/header.module.css'
import Menu from "./Menu";
import NeutronLogo from "../../public/neutron-logo.png"
import { useTranslations } from "next-intl";

interface HeaderProps {
  homeRef: MutableRefObject<HTMLElement>
}


const Header = (props: HeaderProps) => {
  const { homeRef } = props;
  const itemRefs = useRef<HTMLElement[]>([]);

  const [headerDetached, setHeaderDetached] = useState(false);
  const lastScrollTop = useRef(1);
  const [displayHeaderMenu, setDisplayHeaderMenu] = useState(true);
  const [menuIn, setMenuIn] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({});
  const t = useTranslations('Header');

  async function header_in_animation() {
    for (const item of itemRefs.current) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
      await sleep(100);
    }
  }

  const scroll_event = useCallback(() => {
    setHeaderDetached(homeRef.current.getBoundingClientRect().top > -50);
  }, [setHeaderDetached, homeRef]);

  const handleScroll = useCallback(() => {
    scroll_event();
    let newLastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerStyle = {
      top: (newLastScrollTop > lastScrollTop.current) ? '-104px' : '0px',
      boxShadow: (newLastScrollTop < lastScrollTop.current) ? 'none' : '0px 5px 20px rgba(0, 0, 0, 0.8)'
    };
    lastScrollTop.current = Math.max(0, newLastScrollTop);
    setHeaderStyle(headerStyle);
  }, [scroll_event, lastScrollTop, setHeaderStyle]);

  const handleResize = useCallback(() => {
    scroll_event();
    setDisplayHeaderMenu(window.innerWidth > 1100);
  }, [scroll_event, setDisplayHeaderMenu]);

  const handleMenuIconClick = (active: boolean) => {
    setMenuIn(active);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    handleResize();
    header_in_animation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, handleScroll]);

  return (
    <>
      <div className={`${styles.header_div} ${headerDetached ? styles.detached : styles.attached}`} style={headerStyle}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <a className={`${styles.in_animation} ${styles.in_animation}`} ref={el => (itemRefs as any).current[0] = el} href={process.env.NEXT_PUBLIC_NEUTRON_WEB}>
                <Image src={NeutronLogo} alt="logo" width={205} height={35} />
              </a>
            </div>
            <div className={styles.menu} style={{ display: displayHeaderMenu ? 'block' : 'none' }}>
              <ol>
                <li ref={el => (itemRefs as any).current[1] = el} className={`${styles.in_animation}`}><a className={styles.not_button} href="#home">{t('home')}</a></li>
                <li ref={el => (itemRefs as any).current[2] = el} className={`${styles.in_animation}`}><a className={styles.not_button} href="#innovation">{t('service')}</a></li>
                <li ref={el => (itemRefs as any).current[3] = el} className={`${styles.in_animation}`}><a className={styles.not_button} href={process.env.NEXT_PUBLIC_NEUTRON_DOCS}>{t('documentation')}</a></li>
                {/* <li ref={el => (itemRefs as any).current[4] = el} className={`${styles.in_animation}`}><a className={styles.not_button} href="#blog">{t('blog')}</a></li> */}
                <li ref={el => (itemRefs as any).current[4] = el} className={`${styles.in_animation}`}><a className={styles.not_button} href="#contact">{t('contact')}</a></li>
                <li ref={el => (itemRefs as any).current[5] = el} className={`${styles.in_animation}`}>
                  <a className={`${styles.button} button`} href={process.env.NEXT_PUBLIC_NEUTRON_APPLICATION}>
                    <p>{t('access')}</p>
                    <svg className={styles.button_arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.69 17.39"><g>
                      <path className={styles.path_1} d="M8.9 12.4 L8.9 12.4" />
                      <path className={styles.path_2} d="M16.2 5 8.9 12.4 1.5 5" /></g>
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
            <svg className={`${styles.menu_icon} ${headerDetached ? styles.menu_icon_attached : styles.menu_icon_detached}`} style={{ display: displayHeaderMenu ? 'none' : 'block' }} onClick={() => handleMenuIconClick(true)} viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
              <line x1="10" y1="10" x2="130" y2="10" />
              <line x1="30" y1="50" x2="130" y2="50" />
              <line x1="50" y1="90" x2="130" y2="90" />
            </svg>
          </nav>
        </header>
      </div>
      <Menu
        onMenuClick={handleMenuIconClick}
        menuIn={menuIn}
      />
    </>
  )
};


export default Header;
