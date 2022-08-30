import * as React from 'react';
import NavCenter from './nav-center';
import NavCenterUk from './nav-center.uk';

export default function Navigation(props) {
  let navigation = <NavCenter />;
  if (props.lang === 'uk') {
    navigation = <NavCenterUk />;
  } else if (props.lang === 'de') {
    navigation = <NavCenterDe />;
  }

  return navigation;
}
