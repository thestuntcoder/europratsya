import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';
import { StaticImage } from 'gatsby-plugin-image';
import CountrySelector from '../components/country-selector';

export default function SkillsInDemand({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const handleChange = (e) => {
    e.preventDefault();
    window.location.href = e.target.value;
  };

  const metaDescription = t(
    'Skills in demand country by country for easier career planning in Europe'
  );
  const metaTitle = t('Skills in demand country by country in Europe');

  let imgUnemployment = (
    <StaticImage
      className="my-8 h-full w-auto"
      src="../images/checklist/en-Unemployment-Map-2x.png"
      alt={t('Unemployment Map')}
      loading="auto"
      objectFit="contain"
    />
  );

  if (language === 'uk') {
    imgUnemployment = (
      <StaticImage
        className="my-8 h-full w-auto"
        src="../images/checklist/uk-Unemployment-Map-2x.png"
        alt={t('Unemployment Map')}
        loading="auto"
        objectFit="contain"
      />
    );
  }

  if (language === 'de') {
    imgUnemployment = (
      <StaticImage
        className="my-8 h-full w-auto"
        src="../images/checklist/de-Unemployment-Map-2x.png"
        alt={t('Unemployment Map')}
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
          <h4 className="mr-8 mb-12 text-xl font-bold tracking-wide text-black">
            <CountrySelector
              selectCountry={t('Select a country')}
              data={data}
              lang={language}
            >
              <Trans>Choose a country of interest</Trans>
              {` `}
            </CountrySelector>
          </h4>
          <h1 className="text-center text-base text-3xl font-bold tracking-wide text-black">
            <Trans>Skills in demand</Trans>
          </h1>
          {imgUnemployment}
        </div>
      </div>
    </LayoutPage>
  );
}

export const COUNTRIES = graphql`
  query allSanityCountry($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "skills-in-demand"] }
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

    allSanityCountry(sort: { fields: title___en, order: ASC }) {
      nodes {
        slug {
          current
        }
        title {
          en
          uk
          de
        }
        id
      }
    }
  }
`;
