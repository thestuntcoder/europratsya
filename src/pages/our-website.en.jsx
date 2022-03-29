import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function OurWebsite() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Our website | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/expertise/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Our website
              </h1>
              <div className="prose-indigo prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  This website is owned and operated by Europratsya CIC, and
                  subject to the privacy policy accessible below.
                </p>
                <p>
                  Our company address is Europratsya CIC, 32 Oakbank Crescent,
                  Perth PH1 1DF, UK.
                </p>
                <p>Our corporation tax reference number is BRCT00001440441.</p>
                <p>
                  The content on this website is provided by Europratsya CIC and
                  we endeavour to keep the information up to date and correct.
                </p>
                <p>
                  Through our pages you are able to link to other websites which
                  are not under the control of Europratsya CIC, to which our
                  privacy policy doesn’t apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
