import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

export default function VacanciesUk({ data }) {
  const metaDescription =
    'Роботодавці які позитивно настроєнні до співбесіди з українськими кандидатами, вони також є безпечними та перевіреними.';
  const metaTitle =
    'Роботодавці які заохочують українських кандидатів подавати заявки на вакансії';

  let allJobAds = [];
  let edges = data.allSanityJobPost.edges;

  for (var key in edges) {
    if (edges[key].node.employer == null) continue;
    if (edges[key].node.slug == null) continue;

    allJobAds.push(
      <tr key={key}>
        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
          <Link
            to={'/uk/job/' + edges[key].node.slug.current}
            className="text-blue-500 hover:text-blue-900"
          >
            {edges[key].node.title.uk === null
              ? edges[key].node.title.en
              : edges[key].node.title.uk}
          </Link>
          <dl className="font-normal lg:hidden">
            <dt className="sr-only">Робота</dt>
            <dd className="mt-1 truncate text-gray-700">
              {edges[key].node.employer.name}
            </dd>
            <dt className="sr-only sm:hidden">Місце</dt>
            <dd className="mt-1 truncate text-gray-500 sm:hidden">
              {edges[key].node.city + ', ' + edges[key].node.country.title.uk}
            </dd>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
          {edges[key].node.employer.name}
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          {edges[key].node.city + ', ' + edges[key].node.country.title.uk}
        </td>
        <td className="px-3 py-4 text-sm text-gray-500">
          {edges[key].node.job_languages.map((c) => c.name).join(' або ')}
        </td>
        <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <Link
            to={'/uk/job/' + edges[key].node.slug.current}
            className="text-blue-500 hover:text-blue-900"
          >
            Вгляд →
          </Link>
        </td>
      </tr>
    );
  }

  return (
    <LayoutPage lang="uk">
      <Helmet>
        <title>
          Роботодавці які заохочують українських кандидатів подавати заявки на
          вакансії | Europratsya
        </title>
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
            Вакансії
          </h1>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mt-12">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Робота
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Компанія
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Місце
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Мову
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Вгляд →</span>
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
  query allJobPostsUk {
    allSanityJobPost {
      edges {
        node {
          city
          country {
            title {
              en
              uk
            }
          }
          salary
          title {
            en
            uk
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
