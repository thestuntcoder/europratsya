import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';
import schengenImg from '../images/schengen.jpeg';
import ukeduImg from '../images/ukedu.jpg';
import ukrBg from '../images/ukr-background.jpg';

export default function Home() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt="We welcome Ukrainians to European Union."
            />
            <div
              className="absolute inset-0 bg-gray-400 opacity-25"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white text-center drop-shadow-md">
              Our portal assists European employers in finding skilled Ukrainian
              workers.
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-yellow-400 p-5 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  Candidates
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  Please check our work visa guides and skills shortages guide{' '}
                  <Link to="/skill-shortages/">country by country</Link>.
                </p>
                <p className="mt-8 text-base text-gray-500">
                  Do you need CV translation help?
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      to="/contact-for-job-seekers/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
                    >
                      Send us your CV
                      <svg
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        aria-hidden="true"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-yellow-400 p-5 shadow-lg">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Employers</h3>
                <p className="mt-4 text-base text-gray-500">
                  To evaluate Ukrainian CVs, please check our{' '}
                  <Link to="/ukr-eduction-explainer/">
                    UKR education explainer
                  </Link>{' '}
                  and our{' '}
                  <Link to="/ukr-expertise-explained/">
                    UKR expertise explainer
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-gray-500">
                  Register to post your vacancies
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      to="/contact-for-employers/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
                    >
                      Join now
                      <svg
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        aria-hidden="true"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0" />
      </div>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={schengenImg}
              alt="Schengen area"
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ukrainians are warmly welcomed everywhere in Europe
              </h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Check in here for job opportunities and introductions to
                European employers who actively seek Ukrainian colleagues - no
                work visas required inside Schengen.
              </p>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Look out for our guide to securing work visas in the UK,
                Ireland, Bulgaria and Croatia.
              </p>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                To offer jobs to Ukrainians please email{' '}
                <a href="mailto:info@europratsya.com">info@europratsya.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-800">
        <div className="h-56 bg-blue-500 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="ml-8 pt-16">
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Are you an Employer
            </p>
            <p className="mt-3 text-lg text-gray-300">
              register to post your vacancies
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Join
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Are you a Candidate
            </p>
            <p className="mt-3 text-lg text-gray-300">
              and need CV translation help?
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Send us your CV
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-4xl">
              Latest ads
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Find employers which meet EU work regulations, so there is no
              exploitation for migrant workers.
            </p>
          </div>
          <JobAds limit="9" />
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto lg:flex lg:items-center lg:justify-between">
          <img
            className="w-full lg:h-full lg:max-w-none"
            src={ukeduImg}
            alt="Ukrainian education"
          />
        </div>
        <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
          <p className="text-2xl text-gray-500 text-center max-w-3xl mx-auto mt-8 mb-8">
            Several Nobel prize winners in medicine, physics, chemistry and
            literature hail from Ukraine. Its oldest universities are from the
            16th and 17th century, and continue to churn out world-class
            graduates in sciences, engineering, agriculture and mining.
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Sponsors and partners
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
