import Head from 'next/head';
import { SITE } from '@/data/site';

// WhatsApp/Facebook require absolute URLs for og:image and og:url.
export default function ShareMeta({ title, description, path = '/', image, imageWidth = 1024, imageHeight = 576, imageAlt = '' }) {
  const url = `${SITE.url}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`;

  return (
    <Head>
      <link rel="canonical" href={url} key="canonical" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:locale" content="he_IL" key="og:locale" />
      <meta property="og:site_name" content={SITE.name} key="og:site_name" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:image" content={imageUrl} key="og:image" />
      <meta property="og:image:secure_url" content={imageUrl} key="og:image:secure_url" />
      <meta property="og:image:type" content="image/jpeg" key="og:image:type" />
      <meta property="og:image:width" content={String(imageWidth)} key="og:image:width" />
      <meta property="og:image:height" content={String(imageHeight)} key="og:image:height" />
      <meta property="og:image:alt" content={imageAlt} key="og:image:alt" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      <meta name="twitter:image" content={imageUrl} key="twitter:image" />
    </Head>
  );
}
