import algoliasearch from 'algoliasearch/lite';
import { createRef, default as React, useState, useMemo } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './search-box';
import SearchResult from './search-result';
import useClickOutside from './use-click-outside';

export default function Search({ indices, mobile = false, classList }) {
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
  const searchBoxStyle = mobile ? 'md:hidden block' : 'hidden md:block right-0';
  const searchResultStyle = mobile
    ? 'md:hidden block top-20 mt-9'
    : 'hidden md:block top-12';

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={'Home'}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <div className={classList} ref={rootRef}>
        <SearchBox
          onFocus={() => setFocus(true)}
          hasFocus={hasFocus}
          classList={searchBoxStyle}
        />
        <SearchResult
          show={query}
          indices={indices}
          className={`${query && hasFocus ? searchResultStyle : 'hidden'}`}
        />
      </div>
    </InstantSearch>
  );
}
