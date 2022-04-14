import React from "react";

import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Head from "next/head";

function BaseLayout({ children }) {
  return (
    <>
      <Head>
        <SEO />
      </Head>
      <div className="bodyContainer">
        <main>
          {children?.props?.statusCode !== 404 ? <Navigation /> : null}
          {children}
          {children?.props?.statusCode !== 404 ? <Footer /> : null}
        </main>
      </div>
    </>
  );
}

export default BaseLayout;
