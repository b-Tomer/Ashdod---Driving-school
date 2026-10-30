import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import RootLayout from '@/Components/RootLayout';
import '../app/globals.css';

const GA_ID = 'G-7V84JX3L13';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      requestAnimationFrame(() => {
        if (hash === 'lead-top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const element = document.getElementById(hash);
        if (!element) return;
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    };

    const handleRouteChange = (url) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', GA_ID, { page_path: url });
      }
      scrollToHash();
    };

    scrollToHash();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
