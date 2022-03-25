import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import NavCenterUk from '../components/layout/nav-center.uk';
import JobAds from '../components/job-ads';
import BlockContent from '../components/block-content';

function visa(visa, lang = 'en') {
  if (visa == null) return;

  const visaName = lang === 'en' ? visa.title.en : visa.title.uk;
  const visaDesc =
    lang === 'en' ? visa.description._rawEn : visa.description._rawUk;

  return (
    <div>
      <h2 className="text-xl mt-8 font-extrabold text-blue-500">{visaName}</h2>
      <div className="relative max-w-7xl mx-auto py-8">
        <BlockContent blocks={visaDesc} />
      </div>
    </div>
  );
}

function skills(skills, lang = 'en') {
  if (skills == null) return;

  const skillsName = lang === 'en' ? skills.title.en : skills.title.uk;
  const skillsDesc =
    lang === 'en' ? skills.description._rawEn : skills.description._rawUk;

  return (
    <div>
      <h2 className="text-xl mt-8 font-extrabold text-blue-500">
        {skillsName}
      </h2>
      <div className="relative max-w-7xl mx-auto py-8">
        <BlockContent blocks={skillsDesc} />
      </div>
    </div>
  );
}

function vacancies(ads, lang = 'en') {
  if (ads == null || ads.length === 0) return;

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-4xl">
            {lang === 'en' ? 'Latest vacancies' : 'Новітні вакансії'}
          </h2>
        </div>
        <JobAds limit="24" data={ads} />
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
      className="w-full md:w-2/5 float-right ml-4 mb-4"
      alt={country_name}
      objectFit="contain"
    />
  );
}

export default function Country(props) {
  const language = props.pageContext.language;
  let countryName =
    language === 'en'
      ? props.data.country.title.en
      : props.data.country.title.uk;

  const navigation = language === 'en' ? <NavCenter /> : <NavCenterUk />;

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{countryName}</title>
      </Helmet>

      <div className="relative">{navigation}</div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {country_image(props.data.country, countryName)}
          <h1 className="text-3xl mt-8">{countryName}</h1>
          {visa(props.data.visa, language)}
          {skills(props.data.skills, language)}
        </div>
      </div>

      {vacancies(props.data.jobs.edges, language)}
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
