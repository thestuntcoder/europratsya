import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';
import BlockContent from '../components/block-content';

export const query = graphql`
  query CountryTemplateQuery($id: String!) {
    country: sanityCountry(id: { eq: $id }) {
      title {
        en
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
      }
      title {
        en
      }
    }

    skills: sanitySkillShortages(
      countries: { elemMatch: { id: { eq: $id } } }
    ) {
      description {
        _rawEn
      }
      title {
        en
      }
    }

    jobs: allSanityJobPost(filter: { country: { id: { eq: $id } } }) {
      edges {
        node {
          city
          country {
            title {
              en
            }
          }
          salary
          contact
          title {
            en
          }
          description {
            en {
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

function visa(visa) {
  if (visa == null) return;

  return (
    <div>
      <h2 className="text-xl mt-8 font-extrabold text-blue-500">
        {visa.title.en}
      </h2>
      <div className="relative max-w-7xl mx-auto py-8">
        <BlockContent blocks={visa.description._rawEn} />
      </div>
    </div>
  );
}

function skills(skills) {
  if (skills == null) return;

  return (
    <div>
      <h2 className="text-xl mt-8 font-extrabold text-blue-500">
        {skills.title.en}
      </h2>
      <div className="relative max-w-7xl mx-auto py-8">
        <BlockContent blocks={skills.description._rawEn} />
      </div>
    </div>
  );
}

function vacancies(ads) {
  if (ads == null || ads.length === 0) return;

  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-4xl">
            Latest vacancies
          </h2>
        </div>
        <JobAds limit="24" data={ads} />
      </div>
    </div>
  );
}

function country_image(img, country_name) {
  if (img == null) return;

  const getImg = getImage(img.asset.gatsbyImageData);

  return (
    <GatsbyImage
      image={getImg}
      className="w-full md:w-2/5 float-right ml-4 mb-4"
      alt={country_name}
      objectFit="contain"
    />
  );
}

const Country = (props) => {
  return (
    <LayoutPage>
      <Helmet>
        <title>{props.data.country.title.en}</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {country_image(
            props.data.country.seo.seo_image,
            props.data.country.title.en
          )}
          <h1 className="text-3xl mt-8">{props.data.country.title.en}</h1>
          {visa(props.data.visa)}
          {skills(props.data.skills)}
        </div>
      </div>

      {vacancies(props.data.jobs.edges)}
    </LayoutPage>
  );
};

export default Country;
