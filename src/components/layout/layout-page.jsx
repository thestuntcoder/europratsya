import './css/tailwind.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';

export default function LayoutPage(content) {
  const metaTitle =
    'Europratsya helps job-seekers who need to set up a temporary base for their families outside Ukraine.';
  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:site_name" content={metaTitle} />
        <meta
          property="og:image"
          content="https://d10ngartke0vp.cloudfront.net/uk-field.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:image"
          content="https://d10ngartke0vp.cloudfront.net/uk-field.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <div className="font-sans text-gray-900 antialiased">
        {content.children}
      </div>
      <Footer />
    </div>
  );
}
