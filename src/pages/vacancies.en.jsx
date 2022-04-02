import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import {
  listVacancies,
  listCountries,
  listLanguages,
} from '../helpers/vacancies';

export default function Vacancies({ data }) {
  const metaDescription =
    'Job vacancies from safe, quality employers who are positive to interviewing Ukrainian candidates.';
  const metaTitle = 'Job vacancies from firms encouraging Ukrainian candidates';
  const language = 'en';

  return (
    <LayoutPage>
      <Helmet>
        <title>Vacancies with Vetted Euro employers | Europratsya</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            <h1 className="text-base text-3xl font-bold tracking-wide text-black">
              Vacancies
            </h1>
            <div>{listCountries(data.allSanityJobPost.edges, language)}</div>
            <div>{listLanguages(data.allSanityJobPost.edges, language)}</div>
          </div>
          <div className="mt-12 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Job
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Languages
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">View →</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {listVacancies(data.allSanityJobPost.edges, language, {
                  title: 'Title',
                  or: ' or ',
                  view: 'View',
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
  query allJobPosts {
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
