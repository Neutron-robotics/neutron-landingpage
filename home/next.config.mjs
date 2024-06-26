import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  serverRuntimeConfig: {
    NEXT_PUBLIC_NEUTRON_WEB: process.env.NEXT_PUBLIC_NEUTRON_WEB,
    NEXT_PUBLIC_NEUTRON_API: process.env.NEXT_PUBLIC_NEUTRON_API,
    NEXT_PUBLIC_NEUTRON_DOCS: process.env.NEXT_PUBLIC_NEUTRON_DOCS,
    NEXT_PUBLIC_NEUTRON_APPLICATION: process.env.NEXT_PUBLIC_NEUTRON_APPLICATION,
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    NEXT_PUBLIC_NEUTRON_WEB: process.env.NEXT_PUBLIC_NEUTRON_WEB,
    NEXT_PUBLIC_NEUTRON_API: process.env.NEXT_PUBLIC_NEUTRON_API,
    NEXT_PUBLIC_NEUTRON_DOCS: process.env.NEXT_PUBLIC_NEUTRON_DOCS,
    NEXT_PUBLIC_NEUTRON_APPLICATION: process.env.NEXT_PUBLIC_NEUTRON_APPLICATION,
  },
};

export default withNextIntl(nextConfig);
