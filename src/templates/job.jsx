import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import NavCenterUk from '../components/layout/nav-center.uk';
import NavCenterDe from '../components/layout/nav-center.de';
import BlockContent from '../components/block-content';
import { getRaw, getTitle, getSeo, getUrlPrefix } from '../helpers/language';

export const query = graphql`
  query JobTemplateQuery($id: String!) {
    job: sanityJobPost(id: { eq: $id }) {
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
      job_languages {
        name
      }
      job_categories {
        title
      }
      city
      country {
        title {
          en
          uk
          de
        }
      }
      contact

      employer {
        description {
          _rawEn
          _rawUk
          _rawDe
        }
        website
        name
        slug {
          current
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
      }
    }
  }
`;

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const JobPost = (props) => {
  const language = props.pageContext.language;
  const job = props.data.job;
  const company = job.employer;
  const getImg = getImage(company.image.asset.gatsbyImageData);
  const languages = job.job_languages.map((c) => c.name).join(' or ');
  const categories = job.job_categories.map((c) => c.title).join(', ');

  let languagesLabel = 'Required language';
  if (job.job_languages.length > 1) {
    languagesLabel = 'Optional languages';
  }

  let metaTitle = getSeo(job, 'title', language, getTitle(job.title, language));
  let metaDescription = getSeo(
    job,
    'description',
    language,
    getTitle(job.title, language)
  );
  let metaImage = company.image.asset.gatsbyImageData.images.fallback.src;

  if (job.seo != null && job.seo.seo_image != null) {
    metaImage = job.seo.seo_image.asset.gatsbyImageData.images.fallback.src;
  }

  const companyDescriptionRaw = getRaw(company.description, language);
  const jobTitle = getTitle(job.title, language);
  const jobDescriptionRaw = getRaw(job.description, language);
  const vacanciesUrl = getUrlPrefix(language) + '/vacancies';

  let vacanciesLink,
    navigation,
    contactEmployer = {};

  let contactLink = validateEmail(job.contact)
    ? 'mailto:' + job.contact
    : job.contact;

  switch (language) {
    case 'de':
      contactEmployer = 'Kontakt';
      vacanciesLink = <Link to={vacanciesUrl}>Stellenangebote</Link>;
      navigation = <NavCenterDe />;
      break;

    case 'uk':
      contactEmployer = 'Зверніться до цього роботодавця';
      vacanciesLink = <Link to={vacanciesUrl}>Вакансії</Link>;
      navigation = <NavCenterUk />;
      break;

    default:
      contactEmployer = 'Contact this employer';
      vacanciesLink = <Link to={vacanciesUrl}>Vacancies</Link>;
      navigation = <NavCenter />;
  }

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{jobTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="job post" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
      </Helmet>

      <div className="relative">{navigation}</div>

      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 mx-auto mt-12">
          <h1 className="mb-12 text-base text-3xl font-bold tracking-wide text-black">
            {vacanciesLink}
            <span className="mx-2">&gt;</span>
            <span className="text-blue-500">{jobTitle}</span>
          </h1>
        </div>
      </div>

      <div className="md:flex relative max-w-7xl mx-auto">
        <div className="md:w-2/3 overflow-hidden bg-white">
          <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 pb-16 mx-auto">
            <div className="pb-12">
              <dl className="sm:grid-cols-3 grid grid-cols-1 gap-5 mt-5">
                <div className="sm:p-6 px-4 py-5 overflow-hidden bg-blue-100 rounded-lg shadow">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {languagesLabel}
                  </dt>
                  <dd className="text-large mt-1 font-semibold text-gray-900">
                    {languages}
                  </dd>
                </div>

                <div className="sm:p-6 px-4 py-5 overflow-hidden bg-blue-100 rounded-lg shadow">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Location
                  </dt>
                  <dd className="text-large mt-1 font-semibold text-gray-900">
                    {job.city + ', ' + getTitle(job.country.title, language)}
                  </dd>
                </div>

                <div className="sm:p-6 px-4 py-5 overflow-hidden bg-blue-100 rounded-lg shadow">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Categories
                  </dt>
                  <dd className="text-large mt-1 font-semibold text-gray-900">
                    {categories}
                  </dd>
                </div>
              </dl>
            </div>

            <BlockContent blocks={jobDescriptionRaw} />

            <div className="mt-8 text-center">
              <div className="inline-flex rounded-full shadow">
                <a
                  href={contactLink}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-full text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
                >
                  {contactEmployer}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 md:w-1/3 md:-mt-24 md:bg-white md:pt-0 pt-8 overflow-hidden">
          <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 pb-16 mx-auto">
            <GatsbyImage
              image={getImg}
              className="h-24"
              alt={company.name}
              objectFit="contain"
            />
            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="block my-4 font-semibold text-blue-500"
            >
              {company.website}
            </a>
            <BlockContent blocks={companyDescriptionRaw} />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default JobPost;
