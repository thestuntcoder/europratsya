import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import NavCenterUk from '../components/layout/nav-center.uk';
import NavCenterDe from '../components/layout/nav-center.de';
import JobAds from '../components/job-ads';
import BlockContent from '../components/block-content';
import { getRaw, getUrlPrefix } from '../helpers/language';

export default function Company(props) {
  const language = props.pageContext.language;
  let company = props.data.company;
  let ads = props.data.jobs.edges;
  let getImg = getImage(company.image.asset.gatsbyImageData);

  let metaTitle = company.name;
  let metaDescription = company.name;
  let metaImage = company.image.asset.gatsbyImageData.images.fallback.src;

  if (company.seo != null && company.seo.title_en != null) {
    metaTitle = company.seo.title_en;
  }
  if (company.seo != null && company.seo.description_en != null) {
    metaDescription = company.seo.description_en;
  }
  if (company.seo != null && company.seo.seo_image != null) {
    metaImage = company.seo.seo_image.asset.gatsbyImageData.images.fallback.src;
  }

  const descriptionRaw = getRaw(company.description, language);
  let companyVacancies,
    navigation,
    vettedEmployer = {};

  switch (language) {
    case 'de':
      companyVacancies = 'Stellenangebote des Unternehmens';
      vettedEmployer = 'Geprüfte Arbeitgeber';
      navigation = <NavCenterDe />;
      break;

    case 'uk':
      companyVacancies = 'Вакансії від компанії';
      vettedEmployer = 'Перевірені роботодавці';
      navigation = <NavCenterUk />;
      break;

    default:
      companyVacancies = 'Vacancies from the company';
      vettedEmployer = 'Vetted euro employers';
      navigation = <NavCenter />;
  }

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{company.name}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="company" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
      </Helmet>

      <div className="relative">{navigation}</div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-12 text-base text-3xl font-bold tracking-wide text-black">
            <Link to={getUrlPrefix(language) + '/companies'}>
              {vettedEmployer}
            </Link>
            > <span className="text-blue-500">{company.name}</span>
          </h1>
        </div>
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GatsbyImage
            image={getImg}
            className="h-24"
            alt={company.name}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <BlockContent blocks={descriptionRaw} />
        </div>
      </div>

      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
              {companyVacancies}
            </h2>
          </div>
          <JobAds limit="24" data={ads} language={language} />
        </div>
      </div>
    </LayoutPage>
  );
}

export const query = graphql`
  query CompanyTemplateQuery($id: String!) {
    company: sanityCompany(id: { eq: $id }) {
      description {
        _rawEn
        _rawUk
        _rawDe
      }
      seo {
        title_en
        title_uk
        title_de
        description_en
        description_uk
        description_de
        seo_image {
          asset {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      image {
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
      name
      id
      slug {
        current
      }
    }

    jobs: allSanityJobPost(filter: { employer: { id: { eq: $id } } }) {
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
