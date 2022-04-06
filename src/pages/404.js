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
          className="h-56 w-full object-cover"
          src="../images/under-construction.jpg"
          alt="Under construction banner"
          loading="auto"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8 lg:mt-0">
            <h1 className="text-base text-3xl font-bold tracking-wide text-black">
              На сайті ведуться технічні роботи / Under construction
            </h1>
            <div className="prose-indigo prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
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
