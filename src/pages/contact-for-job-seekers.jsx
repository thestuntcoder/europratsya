import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function ContactJobSeekers() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Contact for Job seekers | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div class="lg:pr-8">
            <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
                You've shown us how tough Ukrainians are!
              </h2>
              <p class="mt-4 text-lg text-gray-500 sm:mt-3">
                Bud we’d love to hear from you and see how we can help! Send us
                a message using the form opposite, or email us. We’d love to
                hear from you! Send us a message using the form opposite, or
                email us.
              </p>
              <form
                action="#"
                method="POST"
                class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autocomplete="organization"
                      class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex justify-between">
                    <label
                      for="how-can-we-help"
                      class="block text-sm font-medium text-gray-700"
                    >
                      How can we help you?
                    </label>
                    <span
                      id="how-can-we-help-description"
                      class="text-sm text-gray-500"
                    >
                      Max. 500 characters
                    </span>
                  </div>
                  <div class="mt-1">
                    <textarea
                      id="how-can-we-help"
                      name="how-can-we-help"
                      aria-describedby="how-can-we-help-description"
                      rows="4"
                      class="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                <div class="text-right sm:col-span-2">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
