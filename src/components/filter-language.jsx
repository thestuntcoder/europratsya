import * as React from 'react';

export default function FilterLanguage(props) {
  let list = [];
  let duplicates = [];
  let edges = props.edges;

  for (var key in edges) {
    if (edges[key].node.employer == null) continue;
    if (edges[key].node.slug == null) continue;

    for (let lKey in edges[key].node.job_languages) {
      const title = edges[key].node.job_languages[lKey].name;
      if (duplicates.includes(title)) continue;

      duplicates.push(title);
      list.push(
        <option value={title} key={'job-languages-' + key}>
          {title}
        </option>
      );
    }
  }

  return (
    <select
      name="job_languages"
      className="form-select appearance-none block w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-500 focus:outline-none float-right"
    >
      {list}
    </select>
  );
}
