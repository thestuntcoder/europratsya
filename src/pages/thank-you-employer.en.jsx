import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function ThankYouEmployerEn() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Thank you</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Thank you very much!
              </h1>
            </div>
          </div>
          <div className="mt-8">
            <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Europratsya is working hard on matching job seekers from Ukraine
                to amazing companies such as yours all over the EU.
              </p>
              <p>
                Somebody from our team will get back to you within 24 hours.
              </p>
              <p className="mt-8">
                Regards from Kristine, Beatrice and Dejan in the Europratsya
                team
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
