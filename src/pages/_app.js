import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import RootLayout from '@/Components/RootLayout';
import '../app/globals.css';

const GTM_ID = 'GTM-5WBR6JH4';

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

    const handleRouteChange = () => {
      scrollToHash();
    };

    scrollToHash();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} strategy="afterInteractive" />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
