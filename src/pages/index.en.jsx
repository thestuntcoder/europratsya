import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';
import schengenImg from '../images/schengen.jpeg';
import ukeduImg from '../images/ukedu.jpg';

export default function Home() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0" />
      </div>

      <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src={schengenImg}
              alt="Schengen area"
            />
          </div>
        </div>
        <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div class="lg:pr-8">
            <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ukrainians are warmly welcomed everywhere in Europe
              </h2>
              <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                Check in here for job opportunities and introductions to
                European employers who actively seek Ukrainian colleagues - no
                work visas required inside Schengen.
              </p>
              <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                Look out for our guide to securing work visas in the UK,
                Ireland, Bulgaria and Croatia.
              </p>
              <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                To offer jobs to Ukrainians please email{' '}
                <a href="mailto:info@europratsya.com">info@europratsya.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-gray-800">
        <div class="h-56 bg-blue-500 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <div class="ml-8 pt-16">
            <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Are you an Employer
            </p>
            <p class="mt-3 text-lg text-gray-300">
              register to post your vacancies
            </p>
            <div class="mt-8">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Join
                  <svg
                    class="-mr-1 ml-3 h-5 w-5 text-gray-400"
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
        <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Are you a Candidate
            </p>
            <p class="mt-3 text-lg text-gray-300">
              and need CV translation help?
            </p>
            <div class="mt-8">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Visit the help center
                  <svg
                    class="-mr-1 ml-3 h-5 w-5 text-gray-400"
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

      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-4xl">
              Latest ads
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Find employers which meet EU work regulations, so there is no
              exploitation for migrant workers.
            </p>
          </div>
          <JobAds limit="9" />
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
          <img
            class="w-full lg:h-full lg:w-auto lg:max-w-none"
            src={ukeduImg}
            alt="Ukrainian education"
          />
        </div>
        <div class="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
          <p className="text-2xl text-gray-500 text-center max-w-3xl mx-auto mt-8 mb-8">
            Several Nobel prize winners in medicine, physics, chemistry and
            literature hail from Ukraine. Its oldest universities are from the
            16th and 17th century, and continue to churn out world-class
            graduates in sciences, engineering, agriculture and mining.
          </p>
        </div>
      </div>
    </LayoutPage>
  );
}
