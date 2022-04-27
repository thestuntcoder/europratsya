import * as React from 'react';
import { Link } from 'gatsby';
import { getUrlPrefix, getTitle } from './language';

export function countriesOutput(data, language) {
  let countriesOut = [];
  for (var key in data) {
    if (data[key].slug == null) continue;

    countriesOut.push(
      <li key={key}>
        <Link
          to={getUrlPrefix(language) + '/countries/' + data[key].slug.current}
        >
          {getTitle(data[key].title, language)}
        </Link>
      </li>
    );
  }

  return <ul className="grid grid-cols-3 gap-4 md:block">{countriesOut}</ul>;
}

export function countriesDropdown(data, language, select_a_country) {
  let countriesOut = [];
  for (var key in data) {
    if (data[key].slug == null) continue;

    countriesOut.push(
      <option
        key={key}
        value={getUrlPrefix(language) + '/countries/' + data[key].slug.current}
      >
        {getTitle(data[key].title, language)}
      </option>
    );
  }

  return (
    <select
      name="countries"
      className="rounded-lg border border-gray-200 bg-gray-50"
    >
      <option>{select_a_country}</option>
      {countriesOut}
    </select>
  );
}
