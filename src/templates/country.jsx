import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export const query = graphql`
  query CountryTemplateQuery($id: String!) {
    country: sanityCountry(id: { eq: $id }) {
      title
    }
  }
`;

const Country = (props) => {
  const { data = {}, errors } = props;
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
          <h1>{title}</h1>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Country;
