import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import BlockContent from '../components/block-content';

export const query = graphql`
  query CountryTemplateQuery($id: String!) {
    country: sanityCountry(id: { eq: $id }) {
      title
    }

    visa: sanityVisaRequirement(country: { _id: { eq: $id } }) {
      description {
        _rawEn
      }
      title {
        en
      }
    }

    skills: sanitySkillShortages(
      countries: { elemMatch: { _id: { eq: $id } } }
    ) {
      description {
        _rawEn
      }
      title {
        en
      }
    }
  }
`;

const Country = (props) => {
  const { data = {} } = props;
  const { title } = data.country || {};

  return (
    <LayoutPage>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl mt-8">{title}</h1>

          <h2 className="text-xl mt-8">{data.visa.title.en}</h2>
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <BlockContent blocks={data.visa.description._rawEn} />
          </div>

          <h2 className="text-xl mt-8">{data.skills.title.en}</h2>
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <BlockContent blocks={data.skills.description._rawEn} />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Country;
