import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function Vacancies({ data }) {
  let allJobAds = [];
  let edges = data.allSanityJobPost.edges;

  for (var key in edges) {
    if (edges[key].node.employer == null) continue;
    if (edges[key].node.slug == null) continue;

    let linkto = '/job/' + edges[key].node.slug.current;

    allJobAds.push(
      <tr className="divide-x divide-gray-200">
        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
          <Link to={linkto}>{edges[key].node.title.en}</Link>
        </td>
        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
          {edges[key].node.employer.name}
        </td>
        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
          {edges[key].node.city + ', ' + edges[key].node.country.title}
        </td>
        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
          {edges[key].node.job_languages.map((c) => c.name).join(' or ')}
        </td>
      </tr>
    );
  }

  return (
    <LayoutPage>
      <Helmet>
        <title>Vacancies with Vetted Euro emploeyers | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <h1 className="text-base text-3xl font-bold tracking-wide text-black">
            Vacancies
          </h1>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mt-12">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr className="divide-x divide-gray-200">
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Job
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                  >
                    Language
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {allJobAds}
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
            title
          }
          salary
          title {
            en
          }
          description {
            en {
              children {
                text
              }
            }
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
