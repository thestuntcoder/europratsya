import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import { employersList } from '../helpers/company';

export default function Companies({ data }) {
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
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-left text-base font-semibold uppercase tracking-wider text-black">
            Vetted euro employers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
            {employersList(data.allSanityCompany.edges)}
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const EMPLOYERS = graphql`
  query Companies {
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
