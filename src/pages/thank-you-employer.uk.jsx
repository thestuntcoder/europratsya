import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

export default function ThankYouEmployerUk() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Спасибі!</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Спасибі!
              </h1>
            </div>
          </div>
          <div className="mt-8">
            <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                «Європраця» наполегливо працює над тим, щоб знайти роботу з
                України в таких чудових компаніях, як ваша, по всьому ЄС.
              </p>
              <p>Хтось із нашої команди зв’яжеться з вами протягом 24 годин.</p>
              <p className="mt-8">
                З повагою від Крістін, Беатріс та Деян у команді Europratsya
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
