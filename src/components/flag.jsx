import * as React from 'react';

import flagDe from '../images/lang/de.png';
import flagEn from '../images/lang/en.png';
import flagUk from '../images/lang/uk.png';

export default function Flag(props) {
  if (props.lang === 'uk') {
    return <img src={flagUk} alt="uk" className="inline h-6" />;
  }

  if (props.lang === 'de') {
    return <img src={flagDe} alt="de" className="inline h-6" />;
  }

  return <img src={flagEn} alt="en" className="inline h-6" />;
}
