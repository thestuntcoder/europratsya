import * as React from 'react';
import { getTitle } from '../helpers/language';

export default function FilterCountry(props) {
  let list = [];
  let duplicates = [];
  let edges = props.edges;

  for (var key in edges) {
    if (edges[key].node.employer == null) continue;
    if (edges[key].node.slug == null) continue;

    const title = getTitle(edges[key].node.country.title, props.lang);
    if (duplicates.includes(title)) continue;

    duplicates.push(title);
    list.push(
      <option value={title} key={'country-' + key}>
        {title}
      </option>
    );
  }

  return (
    <select
      name="country"
      value={props.selectedCountry}
      className="form-select float-right m-0 block w-1/2 appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none"
      onChange={(event) => props.changeCountry(event)}
    >
      <option value="false">{props.default}</option>
      {list}
    </select>
  );
}
