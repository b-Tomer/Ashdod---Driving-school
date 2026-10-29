import Head from 'next/head';
import { SITE } from '@/data/site';
import Footer from './Footer';
import Header from './Header';
import MobileCtaBar from './MobileCtaBar';

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="vAeSIT0wmGq-6fVBD1MHc9iFUUiimStpsmbOTMP9ApI" />
        <link rel="icon" sizes="192x192" href={SITE.logo} type="image/png" />
        <link rel="shortcut icon" href={SITE.logo} type="image/png" />
        <link rel="apple-touch-icon" href={SITE.logo} type="image/png" />
        <meta name="theme-color" content="#123a6b" />
        <title>בית ספר לנהיגה אשדוד | רישיון B ומשאית C1</title>
      </Head>
      <div dir="rtl" className="min-h-screen bg-cream font-hebo text-ink">
        <Header />
        {children}
        <Footer />
        <MobileCtaBar />
      </div>
    </>
  );
}
