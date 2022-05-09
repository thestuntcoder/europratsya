import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';

import enWorkplaceEn from '../images/checklist/enWorkplaceEn.png';
import enWorkplaceDe from '../images/checklist/enWorkplaceDe.png';
import enWorkplaceRu from '../images/checklist/enWorkplaceRu.png';

import ukWorkplaceEn from '../images/checklist/ukWorkplaceEn.png';
import ukWorkplaceDe from '../images/checklist/ukWorkplaceDe.png';
import ukWorkplaceRu from '../images/checklist/ukWorkplaceRu.png';

import deWorkplaceEn from '../images/checklist/deWorkplaceEn.png';
import deWorkplaceDe from '../images/checklist/deWorkplaceDe.png';
import deWorkplaceRu from '../images/checklist/deWorkplaceRu.png';

export default function EssentialChecklists({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const metaDescription = t(
    'An Essential checklist for Ukrainians migrating to EU.'
  );
  const metaTitle = t('An Essential checklist for Ukrainians migrating to EU');

  let imgEnglish = (
    <img
      className="my-8 h-full w-auto"
      src={enWorkplaceEn}
      alt={t('Workplace guide - English')}
      loading="auto"
      objectFit="contain"
    />
  );
  let imgGerman = (
    <img
      className="my-8 h-full w-auto"
      src={enWorkplaceDe}
      alt={t('Workplace guide - German')}
      loading="auto"
      objectFit="contain"
    />
  );
  let imgRussian = (
    <img
      className="my-8 h-full w-auto"
      src={enWorkplaceRu}
      alt={t('Workplace guide - Ukrainian Russian')}
      loading="auto"
      objectFit="contain"
    />
  );

  if (language === 'uk') {
    imgEnglish = (
      <img
        className="my-8 h-full w-auto"
        src={ukWorkplaceEn}
        alt={t('Workplace guide - English')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgGerman = (
      <img
        className="my-8 h-full w-auto"
        src={ukWorkplaceDe}
        alt={t('Workplace guide - German')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgRussian = (
      <img
        className="my-8 h-full w-auto"
        src={ukWorkplaceRu}
        alt={t('Workplace guide - Ukrainian Russian')}
        loading="auto"
        objectFit="contain"
      />
    );
  }

  if (language === 'de') {
    imgEnglish = (
      <img
        className="my-8 h-full w-auto"
        src={deWorkplaceEn}
        alt={t('Workplace guide - English')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgGerman = (
      <img
        className="my-8 h-full w-auto"
        src={deWorkplaceDe}
        alt={t('Workplace guide - German')}
        loading="auto"
        objectFit="contain"
      />
    );

    imgRussian = (
      <img
        className="my-8 h-full w-auto"
        src={deWorkplaceRu}
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
                <p className="mt-8 text-base text-gray-500">
                  <Trans>english_main_text</Trans>
                </p>
                {imgEnglish}

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  <Trans>Workplace guide - German</Trans>
                </h2>
                <p className="mt-8 text-base text-gray-500">
                  <Trans>german_main_text</Trans>
                </p>
                {imgGerman}

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  <Trans>Workplace guide - Ukrainian Russian</Trans>
                </h2>
                <p className="mt-8 text-base text-gray-500">
                  <Trans>ukrainian_main_text</Trans>
                </p>
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
