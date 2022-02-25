import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function Home() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Europratsya</title>
      </Helmet>

      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <NavCenter />
      </div>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0" />
      </div>
    </LayoutPage>
  );
}
