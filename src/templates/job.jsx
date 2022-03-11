import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import BlockContent from '../components/block-content';

export const query = graphql`
  query JobTemplateQuery($id: String!) {
    job: sanityJobPost(id: { eq: $id }) {
      description {
        _rawEn
      }
      title {
        en
      }

      employer {
        description {
          _rawEn
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

const JobPost = (props) => {
  let job = props.data.job;
  let company = job.employer;
  let getImg = getImage(company.image.asset.gatsbyImageData);

  return (
    <LayoutPage>
      <Helmet>
        <title>{job.title.en}</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 mx-auto mt-12">
          <h1 className="mb-12 text-base text-3xl font-bold tracking-wide text-black">
            <Link to="/vacancies">Vacancies</Link> >{' '}
            <span className="text-blue-500">{job.title.en}</span>
          </h1>
        </div>
      </div>

      <div className="md:flex">
        <div className="bg-white overflow-hidden md:w-2/3">
          <div className="relative max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            <BlockContent blocks={job.description._rawEn} />
          </div>
        </div>

        <div className="bg-gray-50 overflow-hidden md:w-1/3 md:-mt-24 pt-8 md:bg-white md:pt-0">
          <div className="relative max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            <GatsbyImage
              image={getImg}
              className="h-24"
              alt={company.name}
              objectFit="contain"
            />
            <BlockContent blocks={company.description._rawEn} />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default JobPost;
