import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import schengenImg from '../images/schengen.jpeg';

export default function Home() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Europratsya</title>
      </Helmet>

      <div className="relative pt-6 pb-6">
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

      <div class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Are you an Employer?</span>
            <span class="block text-gray-600">
              Contact us if you'd like to join our project and post job ads.
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="/employers/"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
              >
                {' '}
                Contact us{' '}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white h-1/3 sm:h-2/3"></div>
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
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-blue-500">
                    <a href="#" class="hover:underline">
                      {' '}
                      Stuttgart, Germany{' '}
                    </a>
                  </p>
                  <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Data Analyst
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Addidas</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        {' '}
                        Addidas{' '}
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16"> Mar 16, 2022 </time>
                      <span aria-hidden="true"> &middot; </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-blue-500">
                    <a href="#" class="hover:underline">
                      {' '}
                      Dublin, Ireland{' '}
                    </a>
                  </p>
                  <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      SEO expert
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Gilette</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        {' '}
                        Gilette{' '}
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-10"> Mar 10, 2022 </time>
                      <span aria-hidden="true"> &middot; </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-blue-500">
                    <a href="#" class="hover:underline">
                      {' '}
                      Paris, France{' '}
                    </a>
                  </p>
                  <a href="#" class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                      Hairdresser
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">Metz Hairstyle</span>
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" class="hover:underline">
                        {' '}
                        Metz Hairstyle{' '}
                      </a>
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-02-12"> Feb 12, 2020 </time>
                      <span aria-hidden="true"> &middot; </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
