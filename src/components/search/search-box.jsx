import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(({ refine, currentRefinement, onFocus }) => (
  <div className="relative hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end w-80">
    <form className="max-w-lg w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          name="search"
          className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-100 text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-gray-200 focus:border-blue-500 focus:ring-grey-300 focus:text-gray-900 sm:text-sm"
          placeholder="France, PHP, work visa"
          type="search"
          aria-label="Search"
          autoComplete="off"
          onChange={(e) => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
      </div>
    </form>
  </div>
));
