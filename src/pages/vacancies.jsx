import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';
import { listVacancies } from '../helpers/vacancies';
import FilterCountry from '../components/filter-country';
import FilterLanguage from '../components/filter-language';

export default function Vacancies({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const [country, setCountry] = useState(false);

  function changeCountry(event) {
    setCountry(event.target.value);
  }

  const [lang, setLang] = useState(false);

  function changeLang(event) {
    setLang(event.target.value);
  }

  const metaDescription =
    'Job vacancies from safe, quality employers who are positive to interviewing Ukrainian candidates.';
  const metaTitle = 'Job vacancies from firms encouraging Ukrainian candidates';

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>Vacancies with Vetted Euro employers | Europratsya</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <Navigation lang={language} />
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-3 md:gap-8">
            <h1 className="text-base text-3xl font-bold tracking-wide text-black">
              <Trans>Vacancies</Trans>
            </h1>
            <div>
              <FilterCountry
                edges={data.allSanityJobPost.edges}
                lang={language}
                selectedCountry={country}
                changeCountry={changeCountry}
              />
            </div>
            <div>
              <FilterLanguage
                edges={data.allSanityJobPost.edges}
                lang={language}
                changeLang={changeLang}
              />
            </div>
          </div>
          <div className="mt-12 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    <Trans>Job</Trans>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    <Trans>Company</Trans>
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    <Trans>Location</Trans>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <Trans>Languages</Trans>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">
                      <Trans>View</Trans> →
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {listVacancies(
                  data.allSanityJobPost.edges,
                  language,
                  {
                    title: 'Title',
                    or: ' or ',
                    view: 'View',
                  },
                  country,
                  lang
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const JOB_POSTS = graphql`
  query allJobPosts($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "vacancies"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    allSanityJobPost {
      edges {
        node {
          city
          country {
            title {
              en
              uk
              de
            }
          }
          salary
          title {
            en
            uk
            de
          }
          employer {
            name
          }
          job_categories {
            title
          }
          job_languages {
            name
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
