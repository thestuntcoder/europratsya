import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

export default function SkillsInDemandUk({ data }) {
  const metaDescription =
    'Навички та професії які полегшать планування пошуків роботи в різних країнах Європи';
  const metaTitle = 'Навички та професії які потрібні в різних країнах Європи';

  data = data.allSanityCountry.nodes;
  let countriesOutput = [];
  for (var key in data) {
    if (data[key].slug == null) continue;

    countriesOutput.push(
      <li key={key}>
        <Link to={'/uk/countries/' + data[key].slug.current}>
          {data[key].title.uk}
        </Link>
      </li>
    );
  }

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

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-black font-bold text-3xl tracking-wide">
                Посібники для отримання візи
              </h1>
              <div className="prose-indigo text-gray-500 text-lg mx-auto mt-8 lg:max-w-none lg:row-start-1 lg:col-start-1">
                <div className="relative md:flex w-full">
                  <div className="md:w-1/3">
                    <ul>{countriesOutput}</ul>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-base text-black font-bold text-xl tracking-wide">
                      Карта безробіття
                    </h2>
                    <StaticImage
                      className="my-8 h-full w-auto"
                      src="../images/checklist/UKR-Unemployment-Map-2x.png"
                      alt="Карта безробіття"
                      loading="auto"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const COUNTRIES = graphql`
  query allSanityCountryUk {
    allSanityCountry(sort: { fields: title___uk, order: ASC }) {
      nodes {
        slug {
          current
        }
        title {
          uk
        }
        id
      }
    }
  }
`;
