import { default as React } from 'react';
import {
  connectStateResults,
  connectHits,
  connectHighlight,
  Index,
} from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="text-xs text-right mx-4 italic">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <div className="text-xs text-right mx-4 italic">No results</div>
  );
});

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark className="bg-blue-200" key={index}>
            {part.value}
          </mark>
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </span>
  );
};

const CustomHighlight = connectHighlight(Highlight);

const Hits = ({ hits }) => (
  <ol className="flex flex-col text-sm">
    {hits.map((hit) => (
      <li className="px-2 py-1 hover:bg-gray-50" key={hit.path}>
        <a className="block" href={hit.path}>
          <CustomHighlight attribute="path" hit={hit} tagName="mark" />
        </a>
      </li>
    ))}
  </ol>
);

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <CustomHits />
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
