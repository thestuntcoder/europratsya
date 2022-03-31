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
