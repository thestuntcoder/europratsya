import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function AboutUs() {
  return (
    <LayoutPage>
      <Helmet>
        <title>About Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div class="relative overflow-hidden bg-white py-16">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <div class="mx-auto mb-6 max-w-prose text-lg">
            <p class="text-center text-base font-semibold uppercase leading-6 tracking-wide text-blue-500">
              Learn more
            </p>
            <h1 class="mt-2 mb-8 text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              About Us
            </h1>
            <p class="text-xl leading-8 text-gray-500">
              Europratsy.com was developed by a team of digital workers from
              Poland, Scandinavia, Serbia and Germany.
            </p>
          </div>
          <div class="prose prose-lg mx-auto text-gray-500">
            <p>
              Our small group wanted to ensure that skills and expertise aren’t
              wasted when Ukrainian families are building new homes, whether
              temporary or for the future.
            </p>
            <p>
              We want to match the needs of European employers with the
              qualifications of the highly educated Ukrainian people.
            </p>
            <p>
              We also want to simplify research and job-hunting for people who
              are on the move, most of them mothers who have responsibility for
              children.
            </p>
            <p>
              Europratsy CIC was founded in the UK as a not-for-profit
              organisation to fund the web-hosting and to employ the Ukrainian
              employees who deliver the translation services. Volunteers across
              Europe research and post updates on employment law and visas.
            </p>
            <p>
              If you have expertise to support us, please email
              info@europratsy.com
            </p>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
