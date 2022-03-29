import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

export default function EssentialChecklistsUk() {
  const metaDescription =
    'Основний контрольний список для українців, які мігрують до ЄС.';
  const metaTitle =
    'Основний контрольний список для українців, які мігрують до ЄС';

  return (
    <LayoutPage language="uk">
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

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Основний контрольний список для українців, які мігрують
              </h1>
              <div className="prose prose-indigo mx-auto mt-8 text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Інформація по мові працевлаштуванні - Англійська
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/UKR-Workplace-guide-English-2x.png"
                  alt="Workplace guide - English"
                  loading="auto"
                  objectFit="contain"
                />

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Інформація по мові працевлаштуванні - Німецька
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/UKR-Workplace-guide-German-2x.png"
                  alt="Workplace-guide-German-2x.png"
                  loading="auto"
                  objectFit="contain"
                />

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Інформація по мові працевлаштуванні - Українська і Російська
                </h2>
                <StaticImage
                  className="my-8 h-full w-auto"
                  src="../images/checklist/UKR-Workplace-guide-Ukrainian-Russian-2x.png"
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
