import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';

export default function EssentialChecklists({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const metaDescription = t(
    'An Essential checklist for Ukrainians migrating to EU.'
  );
  const metaTitle = t('An Essential checklist for Ukrainians migrating to EU');

  let imgEnglish = (
    <StaticImage
      className="my-8 h-full w-auto"
      src="../images/checklist/en-Workplace-guide-English-2x.png"
      alt={t('Workplace guide - English')}
      loading="auto"
      objectFit="contain"
    />
  );
  let imgGerman = (
    <StaticImage
      className="my-8 h-full w-auto"
      src={'../images/checklist/en-Workplace-guide-German-2x.png'}
      alt={t('Workplace guide - German')}
      loading="auto"
      objectFit="contain"
    />
  );
  let imgRussian = (
    <StaticImage
      className="my-8 h-full w-auto"
      src="../images/checklist/en-Workplace-guide-Ukrainian-Russian-2x.png"
      alt={t('Workplace guide - Ukrainian Russian')}
      loading="auto"
      objectFit="contain"
    />
  );

  if (language === 'uk') {
    imgEnglish = (
      <StaticImage
        className="my-8 h-full w-auto"
        src="../images/checklist/uk-Workplace-guide-English-2x.png"
        alt={t('Workplace guide - English')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgGerman = (
      <StaticImage
        className="my-8 h-full w-auto"
        src={'../images/checklist/uk-Workplace-guide-German-2x.png'}
        alt={t('Workplace guide - German')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgRussian = (
      <StaticImage
        className="my-8 h-full w-auto"
        src="../images/checklist/uk-Workplace-guide-Ukrainian-Russian-2x.png"
        alt={t('Workplace guide - Ukrainian Russian')}
        loading="auto"
        objectFit="contain"
      />
    );
  }

  if (language === 'de') {
    imgEnglish = (
      <StaticImage
        className="my-8 h-full w-auto"
        src="../images/checklist/de-Workplace-guide-English-2x.png"
        alt={t('Workplace guide - English')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgGerman = (
      <StaticImage
        className="my-8 h-full w-auto"
        src={'../images/checklist/de-Workplace-guide-German-2x.png'}
        alt={t('Workplace guide - German')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgRussian = (
      <StaticImage
        className="my-8 h-full w-auto"
        src="../images/checklist/de-Workplace-guide-Ukrainian-Russian-2x.png"
        alt={t('Workplace guide - Ukrainian Russian')}
        loading="auto"
        objectFit="contain"
      />
    );
  }

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <Navigation lang={language} />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                <Trans>Essential Checklists</Trans>
              </h1>
              <div className="prose prose-indigo mx-auto mt-8 text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  <Trans>Workplace guide - English</Trans>
                </h2>
                {imgEnglish}

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  <Trans>Workplace guide - German</Trans>
                </h2>
                {imgGerman}

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  <Trans>Workplace guide - Ukrainian Russian</Trans>
                </h2>
                {imgRussian}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const TRANS_ESSENTIAL = graphql`
  query EssentialTranslation($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "essential-checklists"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
