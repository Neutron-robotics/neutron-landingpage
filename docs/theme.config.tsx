import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import NeutronLogo from "./public/neutron-logo.png"
import NeutronLogoDark from "./public/neutron-logo-dark.png"
import Image from "next/image";

const config: DocsThemeConfig = {
  logo:
    <picture>
      <source srcSet="/neutron-logo-dark.png" width={200} media="(prefers-color-scheme: dark)" />
      <img width={200} src="/neutron-logo.png" alt='neutron-logo' />
    </picture>,

  project: {
    link: 'https://x.com/hug0perier',
    icon: (
      <img width={25} src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt='x-logo' />
    )
  },
  chat: {
    link: 'https://discord.gg/Sy2Hj9gFVq',
  },
  footer: {
    text: '',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
