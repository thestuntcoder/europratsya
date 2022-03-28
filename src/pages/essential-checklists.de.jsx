import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';

export default function EssentialChecklistsDe() {
  const metaDescription =
    'Arbeitsvisabestimmungen Land für Land für eine einfachere Karriereplanung in Europa';
  const metaTitle = 'Regeln für Arbeitsvisa Land für Land in Europa';

  return (
    <LayoutPage lang="de">
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
                Wichtige Checklisten
              </h1>
              <div className="prose prose-indigo text-gray-500 text-lg mx-auto mt-8 lg:max-w-none lg:row-start-1 lg:col-start-1">
                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Leitfaden für den Arbeitsplatz - Englisch
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/DE-Workplace-guide-English-2x.png"
                  alt="Workplace guide - English"
                  loading="auto"
                  objectFit="contain"
                />

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Leitfaden für den Arbeitsplatz - Deutsch
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/DE-Workplace-guide-German-2x.png"
                  alt="Workplace-guide-German-2x.png"
                  loading="auto"
                  objectFit="contain"
                />

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Leitfaden für den Arbeitsplatz - Ukrainisch-Russisch
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/DE-Workplace-guide-Ukrainian-Russian-2x.png"
                  alt="Workplace guide - Ukrainian Russian"
                  loading="auto"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
