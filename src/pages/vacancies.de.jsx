import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';
import { listVacancies } from '../helpers/vacancies';

export default function VacanciesDe({ data }) {
  const metaDescription =
    'Stellenangebote von sicheren, hochwertigen Arbeitgebern, die ukrainischen Bewerbern gegenüber positiv eingestellt sind';
  const metaTitle =
    'Stellenangebote von Unternehmen, die ukrainische Bewerber anwerben';

  const language = 'de';

  return (
    <LayoutPage lang="de">
      <Helmet>
        <title>Stellenangebote | Europratsya</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <h1 className="text-base text-3xl font-bold tracking-wide text-black">
            Stellenangebote
          </h1>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mt-12">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Berufsbezeichnung
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Gesellschaft
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Ort
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Sprache
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Offen →</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {listVacancies(data.allSanityJobPost.edges, language, {
                  title: 'Berufsbezeichnung',
                  or: ' oder ',
                  view: 'Offen',
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const JOB_POSTS = graphql`
  query allJobPostsDe {
    allSanityJobPost {
      edges {
        node {
          city
          country {
            title {
              en
              de
            }
          }
          salary
          title {
            en
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
