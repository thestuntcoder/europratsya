import * as React from 'react';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import Navigation from './layout/navigation';
import JobAds from './job-ads';

import ukrBg from '../images/ukr-background-new.jpg';
import ukrUniBg from '../images/ukr-universities.jpg';

import sponsorKaffebakeriet from '../images/sponsors/kaffebakeriet.jpeg';
import sponsorKodit from '../images/sponsors/kodit.png';
import sponsorSC from '../images/sponsors/stuntcoders.png';
import sponsorDT from '../images/sponsors/daytwo.svg';
import sponsorGrieg from '../images/sponsors/grieg.svg';
import sponsorTM from '../images/sponsors/tm.png';

export default function HomepageEnglish({ language, data }) {
  const { t } = useTranslation();

  return (
    <main>
      <div className="relative">
        <Navigation lang={language} />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt={t('We welcome Ukrainians to European Union.')}
              loading="lazy"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              {t(
                'Our portal assists European employers in finding skilled Ukrainian workers.'
              )}
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-gray-800 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  <Trans>Candidates</Trans>
                </h3>
                <p className="mt-4 text-base text-white">
                  <Trans>
                    Please check our work visa guides and skills shortages guide
                  </Trans>
                  <Link to="/skills-in-demand/">
                    <Trans>country by country</Trans>
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  <Trans>Do you need CV translation help?</Trans>
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/contact-for-job-seekers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      <Trans>Contact us</Trans>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-blue-500 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  <Trans>Employers</Trans>
                </h3>
                <p className="mt-4 text-base text-white">
                  <Trans>To evaluate Ukrainian CVs, please check our</Trans>
                  {` `}
                  <Link to="/ukr-eduction-explainer/">
                    <Trans>UKR education explainer</Trans>
                  </Link>{' '}
                  <Trans>and our</Trans>{' '}
                  <Link to="/ukr-expertise-explained/">
                    <Trans>UKR expertise explainer</Trans>
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  <Trans>Register to post your vacancies</Trans>
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/contact-for-employers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      <Trans>Join</Trans>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
            <p>
              <Trans>
                Europratsya post jobs for candidates who need to set up a
                temporary base for their families outside Ukraine. We also post
                remote jobs suitable for workers based inside Ukraine.
              </Trans>
            </p>
            <p>
              <Trans>
                One Ukrainian-language database for skills in demand and
                vacancies across Europe - free for candidates and employers.
              </Trans>
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
              <Trans>Latest vacancies</Trans>
            </h2>
          </div>
          <JobAds
            limit="9"
            language={language}
            data={data.allSanityJobPost.edges}
          />

          <div className="mt-8 text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/vacancies"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                <Trans>See all vacancies</Trans>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-3/4 bg-gray-100">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={ukrUniBg}
            alt="Ukrainian universities"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-30" />
        <div className="z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="z-10 m-auto mx-auto mt-64 mb-64 text-center align-middle text-4xl font-extrabold text-white">
            <Trans>
              Several Nobel prize winners in medicine, physics, chemistry and
              literature hail from Ukraine. Its oldest universities are from the
              16th and 17th century, and continue to produce world-class
              graduates in sciences, engineering, agriculture and mining.
            </Trans>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
            <Trans>Sponsors and partners</Trans>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="190"
                height="48"
                src={sponsorKaffebakeriet}
                alt="Kaffebakeriet"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="200"
                height="48"
                src={sponsorKodit}
                alt="Kodit"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="48"
                height="48"
                src={sponsorGrieg}
                alt="Grieg"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="304"
                height="48"
                src={sponsorSC}
                alt="StuntCoders"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="230"
                height="48"
                src={sponsorDT}
                alt="DayTwo"
                loading="lazy"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="210"
                height="48"
                src={sponsorTM}
                alt="Team Magnus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
