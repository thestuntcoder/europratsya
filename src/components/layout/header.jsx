import React from 'react';
import { Helmet } from 'react-helmet';

export default function Header() {
  return (
    <Helmet>
      <title>Europratsya</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://rsms.me/inter/inter.css"
        media="print"
        onload="this.media='all'"
      />
    </Helmet>
  );
}
