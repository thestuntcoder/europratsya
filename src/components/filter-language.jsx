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
      className="form-select float-right m-0 block w-1/2 appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none"
      onChange={(event) => props.changeLang(event)}
    >
      <option value="false">{props.default}</option>
      {list}
    </select>
  );
}
