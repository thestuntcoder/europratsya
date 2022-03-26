import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';
import { employersList } from '../helpers/company';

export default function CompaniesDe({ data }) {
  const metaDescription =
    'Quality employers who are positive to reviewing Ukrainian expertise and qualifications and interviewing Ukrainian candidates, vetted by Europratsya.';
  const metaTitle = 'Employers who encourage Ukrainian candidates to apply';

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white">
        <div className="max-w-7xl sm:px-6 lg:py-16 lg:px-8 px-4 py-12 mx-auto">
          <p className="text-base font-semibold tracking-wider text-left text-black uppercase">
            Geprüfte EU-Arbeitgeber
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
            {employersList(data.allSanityCompany.edges, 'de')}
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const EMPLOYERS = graphql`
  query CompaniesDe {
    allSanityCompany {
      edges {
        node {
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
      }
    }
  }
`;
