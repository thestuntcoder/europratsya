import algoliasearch from 'algoliasearch/lite';
import { createRef, default as React, useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './search-box';
import SearchResult from './search-result';
import useClickOutside from './use-click-outside';

export default function Search({ indices }) {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_API_KEY
      ),
    []
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={'Home'}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <div ref={rootRef}>
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          show={query}
          indices={indices}
          className={`${query && hasFocus ? 'hidden md:block' : 'hidden'}`}
        />
      </div>
    </InstantSearch>
  );
}
