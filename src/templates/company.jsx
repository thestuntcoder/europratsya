import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';

export const query = graphql`
  query CompanyTemplateQuery($id: String!) {
    company: sanityCompany(id: { eq: $id }) {
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
      about {
        children {
          text
        }
      }
    }
  }
`;

const Company = (props) => {
  const { data = {} } = props;
  let company = props.data.company;

  let getImg = getImage(company.image.asset.gatsbyImageData);

  let companyDescription = [];
  for (let i in company.about) {
    for (let j in company.about[i].children) {
      companyDescription.push(<p>{company.about[i].children[j].text}</p>);
    }
  }

  console.log(data);
  return (
    <LayoutPage>
      <Helmet>
        <title>{company.name}</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-base text-3xl font-bold tracking-wide text-black mb-12">
            <Link to="/companies">Vetted euro employers</Link> > {company.name}
          </h1>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GatsbyImage
            image={getImg}
            className="max-h-12"
            alt={company.name}
            objectFit="contain"
          />
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {companyDescription}
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base text-3xl font-bold tracking-wide text-black mb-12">
            Vacancies from the company
          </h2>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Company;
