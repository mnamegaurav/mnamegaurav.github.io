import React from "react";
import Script from "next/script";

export default function SEO() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="author" content="Gaurav Kumar Sharma - DevJunction" />
      <link rel="icon" href="/favicon.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="/" name="app:pageurl" />

      <meta
        property="og:title"
        content="A Full Stack Web Developer, Educator and Founder of Dev.Junction(a Platform, Community and a YouTube channel), I love working with Python/Django, Django Rest Framework and React(Web and Mobile) as my primary tech stack, currently living in my hometown at Uttar Pradesh, India."
      />
      <meta property="og:image" content="images/seo/website.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1350" />
      <meta property="og:image:height" content="768" />
      <meta
        property="og:image:alt"
        content="A Full Stack Web Developer, Educator and Founder of Dev.Junction(a Platform, Community and a YouTube channel), I love working with Python/Django, Django Rest Framework and React(Web and Mobile) as my primary tech stack, currently living in my hometown at Uttar Pradesh, India."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gaurav.devjunction.in" />
      <meta
        property="og:description"
        content="A Full Stack Web Developer, Educator and Founder of Dev.Junction(a Platform, Community and a YouTube channel), I love working with Python/Django, Django Rest Framework and React(Web and Mobile) as my primary tech stack, currently living in my hometown at Uttar Pradesh, India."
      />
      <meta property="og:site_name" content="Gaurav Kumar Sharma - DevJunction" />
      <meta
        property="twitter:title"
        content="Gaurav Kumar Sharma - DevJunction — A Full Stack Web Developer, Educator and Founder of Dev.Junction(a Platform, Community and a YouTube channel), I love working with Python/Django, Django Rest Framework and React(Web and Mobile) as my primary tech stack, currently living in my hometown at Uttar Pradesh, India."
      />
      <meta
        property="twitter:description"
        content="A Full Stack Web Developer, Educator and Founder of Dev.Junction(a Platform, Community and a YouTube channel), I love working with Python/Django, Django Rest Framework and React(Web and Mobile) as my primary tech stack, currently living in my hometown at Uttar Pradesh, India."
      />
      <meta property="twitter:image" content="images/seo/website.jpg" />
      <meta
        name="description"
        content="A Full Stack Web Developer, Educator and Founder of Dev.Junction(a Platform, Community and a YouTube channel), I love working with Python/Django, Django Rest Framework and React(Web and Mobile) as my primary tech stack, currently living in my hometown at Uttar Pradesh, India."
      />

      <link rel="canonical" href="https://gaurav.devjunction.in" />
      <link rel="prefetch" href="https://gaurav.devjunction.in" />
      <link rel="prerender" href="https://gaurav.devjunction.in" />

      <meta
        name="keywords"
        content="Gaurav Kumar Sharma, DevJunction, Gaurav DevJunction, Gaurav DevJunction LinkedIn"
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-GSWXJYLP20" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GSWXJYLP20', {
                page_path: window.location.pathname,
            });
            `,
        }}
      />
    </>
  );
}
