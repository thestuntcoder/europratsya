import * as React from 'react';
import { Link } from 'gatsby';
import { getTitle, getUrlPrefix } from './language';

export function listVacancies(
  edges,
  lang,
  translation = {
    title: 'Title',
    or: ' or ',
    view: 'View',
  },
  filterCountry = false,
  filterLanguage = false
) {
  let allJobAds = [];

  for (var key in edges) {
    if (edges[key].node.employer == null) continue;
    if (edges[key].node.slug == null) continue;
    if (
      filterCountry !== false &&
      filterCountry !== 'false' &&
      filterCountry !== getTitle(edges[key].node.country.title, lang)
    )
      continue;
    if (
      filterLanguage !== false &&
      filterLanguage !== 'false' &&
      !edges[key].node.job_languages.map((c) => c.name).includes(filterLanguage)
    )
      continue;

    allJobAds.push(
      <tr key={'tr-' + key}>
        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
          <Link
            to={getUrlPrefix(lang) + '/job/' + edges[key].node.slug.current}
            className="text-blue-500 hover:text-blue-900"
          >
            {getTitle(edges[key].node.title, lang)}
          </Link>
          <dl className="font-normal lg:hidden">
            <dt className="sr-only">{translation.title}</dt>
            <dd className="mt-1 truncate text-gray-700">
              {edges[key].node.employer.name}
            </dd>
            <dt className="sr-only sm:hidden">Location</dt>
            <dd className="mt-1 truncate text-gray-500 sm:hidden">
              {edges[key].node.city +
                ', ' +
                getTitle(edges[key].node.country.title, lang)}
            </dd>
          </dl>
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
          {edges[key].node.employer.name}
        </td>
        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
          {edges[key].node.city +
            ', ' +
            getTitle(edges[key].node.country.title, lang)}
        </td>
        <td className="px-3 py-4 text-sm text-gray-500">
          {edges[key].node.job_languages
            .map((c) => c.name)
            .join(translation.or)}
        </td>
        <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <Link
            to={getUrlPrefix(lang) + '/job/' + edges[key].node.slug.current}
            className="text-blue-500 hover:text-blue-900"
          >
            {translation.view} →
          </Link>
        </td>
      </tr>
    );
  }

  return allJobAds;
}
