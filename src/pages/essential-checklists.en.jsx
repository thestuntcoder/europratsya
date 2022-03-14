import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function EssentialChecklists() {
  const metaDescription =
    'An Essential checklist for Ukrainians migrating to EU.';
  const metaTitle = 'An Essential checklist for Ukrainians migrating to EU';

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-black font-bold text-3xl tracking-wide">
                Essential Checklists
              </h1>
              <div className="prose prose-indigo text-gray-500 text-lg mx-auto mt-8 lg:max-w-none lg:row-start-1 lg:col-start-1">
                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Workplace guide - English
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/Workplace-guide-English-2x.png"
                  alt="Workplace guide - English"
                  loading="auto"
                />

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Workplace guide - German
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/Workplace-guide-German-2x.png"
                  alt="Workplace-guide-German-2x.png"
                  loading="auto"
                />

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Workplace guide - Ukrainian Russian
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/Workplace-guide-Ukrainian-Russian-2x.png"
                  alt="Workplace guide - Ukrainian Russian"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
