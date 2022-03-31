import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';

export default function ThankYouEmployerDe() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Vielen Dank!</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Herzlichen Dank!
              </h1>
            </div>
          </div>
          <div className="mt-8">
            <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Europratsya arbeitet hart daran, Arbeitssuchende aus der Ukraine
                mit tollen Unternehmen wie dem Ihren in der ganzen EU
                zusammenzubringen.
              </p>
              <p>
                Jemand aus unserem Team wird sich innerhalb von 24 Stunden mit
                Ihnen in Verbindung setzen.
              </p>
              <p className="mt-8">
                Viele Grüße von Kristine, Beatrice und Dejan vom Europratsya
                Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
