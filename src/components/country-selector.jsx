import * as React from 'react';
import { countriesDropdown } from './helpers/country';

export default function CountrySelector(content) {
  const handleChange = (e) => {
    e.preventDefault();
    window.location.href = e.target.value;
  };

  return (
    <div>
      {content.children}
      {countriesDropdown(
        data.allSanityCountry.nodes,
        language,
        content.selectCountry,
        handleChange
      )}
    </div>
  );
}
