import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

function employersList(edges) {
  let output = [];
  for (var key in edges) {
    output.push(employer(edges[key].node));
  }

  return output;
}

function employer(company) {
  let link = '/uk/company/' + company.slug.current;
  let getImg = getImage(company.image.asset.gatsbyImageData);
  return (
    <div className="bg-gray-50 flex justify-center col-span-1 px-8 py-8">
      <Link to={link}>
        <GatsbyImage
          image={getImg}
          className="max-h-12"
          alt={company.name}
          objectFit="contain"
        />
      </Link>
    </div>
  );
}

export default function Companies({ data }) {
  const metaDescription =
    "Роботодавці, перевірені Europratsya, які позитивно ставляться до перегляду української кваліфікації та інтерв'ю з українськими кандидатами";
  const metaTitle =
    'Роботодавці, які заохочують українських кандидатів подавати заявки';

  return (
    <LayoutPage lang="uk">
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
            Перевірені європейські роботодавці
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            {employersList(data.allSanityCompany.edges)}
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const EMPLOYERS = graphql`
  query CompaniesUk {
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
