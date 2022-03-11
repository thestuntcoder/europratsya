import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';
import BlockContent from '../components/block-content';

export const query = graphql`
  query CompanyTemplateQuery($id: String!) {
    company: sanityCompany(id: { eq: $id }) {
      description {
        _rawEn
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
            title
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

const Company = (props) => {
  let company = props.data.company;
  let ads = props.data.jobs.edges;
  let getImg = getImage(company.image.asset.gatsbyImageData);

  return (
    <LayoutPage>
      <Helmet>
        <title>{company.name}</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 mx-auto mt-12">
          <h1 className="mb-12 text-base text-3xl font-bold tracking-wide text-black">
            <Link to="/companies">Vetted euro employers</Link> >{' '}
            <span className="text-blue-500">{company.name}</span>
          </h1>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GatsbyImage
            image={getImg}
            className="h-24"
            alt={company.name}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <BlockContent blocks={company.description._rawEn} />
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-left">
            <h2 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-4xl">
              Vacancies from the company
            </h2>
          </div>
          <JobAds limit="24" data={ads} />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Company;
