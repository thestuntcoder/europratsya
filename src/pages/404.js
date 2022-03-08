import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function NotFoundPage() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Page under construction | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <StaticImage
          className="object-cover w-full h-56"
          src="../images/under-construction.jpg"
          alt="Under construction banner"
          loading="auto"
        />

        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 py-16 mx-auto">
          <div className="lg:mt-0 mt-8">
            <h1 className="text-base text-3xl font-bold tracking-wide text-black">
              Page title
            </h1>
            <div className="prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
              <p>
                Our team will update this page with English-language information
                shortly.
              </p>
              <p>
                Unser Team arbeitet gerade daran, Informationen in Deutsch und
                über Deutschland für Sie zur Verfügung zu stellen.
              </p>
              <p>
                Наша команда працює над оновленням цієї сторінки українською
                мовою.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
