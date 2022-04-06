import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import NavCenterUk from '../components/layout/nav-center.uk';
import NavCenterDe from '../components/layout/nav-center.de';
import JobAds from '../components/job-ads';
import BlockContent from '../components/block-content';
import { getTitle, getRaw } from '../helpers/language';

function visa(visa, lang = 'en') {
  if (visa == null) return;

  const visaName = getTitle(visa.title, lang);
  const visaDesc = getRaw(visa.description, lang);

  return (
    <div>
      <h2 className="mt-8 text-xl font-extrabold text-blue-500">{visaName}</h2>
      <div className="relative mx-auto max-w-7xl py-8">
        <BlockContent blocks={visaDesc} />
      </div>
    </div>
  );
}

function skills(skills, lang = 'en') {
  if (skills == null) return;

  const skillsName = getTitle(skills.title, lang);
  const skillsDesc = getRaw(skills.description, lang);

  return (
    <div>
      <h2 className="mt-8 text-xl font-extrabold text-blue-500">
        {skillsName}
      </h2>
      <div className="relative mx-auto max-w-7xl py-8">
        <BlockContent blocks={skillsDesc} />
      </div>
    </div>
  );
}

function vacancies(ads, lang = 'en', subtitle = 'Latest vacancies') {
  if (ads == null || ads.length === 0) return;

  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
            {subtitle}
          </h2>
        </div>
        <JobAds limit="24" data={ads} language={lang} />
      </div>
    </div>
  );
}

function country_image(country, country_name) {
  if (country.seo == null || country.seo.seo_image == null) return;

  const getImg = getImage(country.seo.seo_image.asset.gatsbyImageData);

  return (
    <GatsbyImage
      image={getImg}
      className="float-right ml-4 mb-4 w-full md:w-2/5"
      alt={country_name}
      objectFit="contain"
    />
  );
}

export default function Country(props) {
  const language = props.pageContext.language;

  let countryName = getTitle(props.data.country.title, language);

  let navigation,
    subtitle = {};

  switch (language) {
    case 'de':
      subtitle = 'Neueste Stellenausschreibungen';
      navigation = <NavCenterDe />;
      break;

    case 'uk':
      subtitle = 'Новітні вакансії';
      navigation = <NavCenterUk />;
      break;

    default:
      navigation = <NavCenter />;
      subtitle = 'Latest vacancies';
  }

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{countryName}</title>
      </Helmet>

      <div className="relative">{navigation}</div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          {country_image(props.data.country, countryName)}
          <h1 className="mt-8 text-3xl">{countryName}</h1>
          {visa(props.data.visa, language)}
          {skills(props.data.skills, language)}
        </div>
      </div>

      {vacancies(props.data.jobs.edges, language, subtitle)}
    </LayoutPage>
  );
}

export const query = graphql`
  query CountryTemplateQuery($id: String!) {
    country: sanityCountry(id: { eq: $id }) {
      title {
        en
        uk
        de
      }
      seo {
        seo_image {
          _key
          _type
          _rawAsset
          _rawHotspot
          _rawCrop
          asset {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }

    visa: sanityVisaRequirement(country: { id: { eq: $id } }) {
      description {
        _rawEn
        _rawUk
        _rawDe
      }
      title {
        en
        uk
        de
      }
    }

    skills: sanitySkillShortages(
      countries: { elemMatch: { id: { eq: $id } } }
    ) {
      description {
        _rawEn
        _rawUk
        _rawDe
      }
      title {
        en
        uk
        de
      }
    }

    jobs: allSanityJobPost(filter: { country: { id: { eq: $id } } }) {
      edges {
        node {
          city
          country {
            title {
              en
              uk
              de
            }
          }
          salary
          contact
          title {
            en
            uk
            de
          }
          description {
            en {
              children {
                text
              }
            }
            uk {
              children {
                text
              }
            }
            de {
              children {
                text
              }
            }
          }
          employer {
            name
          }
          job_categories {
            title
          }
          validUntil
          slug {
            current
          }
        }
      }
    }
  }
`;
