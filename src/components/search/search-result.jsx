import { default as React } from 'react';
import {
  connectStateResults,
  connectHits,
  Highlight,
  Index,
} from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="text-xs text-right mx-4">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <div className="text-xs text-right mx-4">No results</div>
  );
});

const PageHit = ({ hit }) => (
  <div className="flex">
    <a href={hit.path}>
      <h4 className="text-sm mx-4">
        <Highlight attribute="path" hit={hit} tagName="mark" />
      </h4>
    </a>
  </div>
);

const Hits = ({ hits }) => (
  <ol className="flex flex-col space-y-2 text-sm">
    {hits.map((hit) => (
      <li className="px-2" key={hit.path}>
        <a href={hit.path}>{hit.path}</a>
      </li>
    ))}
  </ol>
);

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <CustomHits className="Hits" hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div
    className={`absolute top-12 right-0 max-w-xs max-h-80 shadow-lg p-2 w-screen sm:px-0 z-20 bg-gray-100 rounded overflow-y-scroll ${className}`}
  >
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
);

export default SearchResult;
