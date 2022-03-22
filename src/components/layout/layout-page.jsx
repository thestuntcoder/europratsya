import './css/tailwind.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';
import FooterUk from './footer.uk';
import { useLocation } from '@reach/router';
import ukField from '../../images/uk-field-linkedin.jpg';

export default function LayoutPage(content) {
  const metaTitle =
    'Europratsya helps job-seekers who need to set up a temporary base for their families outside Ukraine.';

  const { pathname } = useLocation();

  let footer = <Footer />;
  if (content.lang === 'uk') {
    footer = <FooterUk />;
  }

  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:site_name" content={metaTitle} />
        <meta
          property="og:image"
          content={'https://europratsya.com/' + ukField}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={'https://europratsya.com/' + pathname}
        />
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
      {footer}
    </div>
  );
}
