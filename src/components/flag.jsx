import * as React from 'react';

import flagDe from '../images/lang/de.png';
import flagEn from '../images/lang/en.png';
import flagUk from '../images/lang/uk.png';

export default function Flag(props) {
  if (props.lang === 'uk') {
    return <img src={flagUk} alt="uk" className="h-6 inline" />;
  }

  if (props.lang === 'de') {
    return <img src={flagDe} alt="de" className="h-6 inline" />;
  }

  return <img src={flagEn} alt="en" className="h-6 inline" />;
}
