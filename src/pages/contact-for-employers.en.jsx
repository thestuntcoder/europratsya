import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import contactImg from '../images/contact/contact-form-employers.jpg';

export default function ContactEmployers() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Contact for employers of Ukrainians | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 py-16 mx-auto">
          <div className="lg:block bg-gray-50 left-3/4 absolute top-0 bottom-0 hidden w-screen"></div>
          <div className="max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none mx-auto text-base">
            <div>
              <h2 className="text-base text-3xl font-bold tracking-wide text-black">
                Helping you reach Ukrainians
              </h2>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8">
            <div className="lg:row-start-1 lg:col-start-2 relative">
              <div className="max-w-prose lg:max-w-none relative mx-auto text-base italic">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center rounded-lg shadow-lg"
                      src={contactImg}
                      alt="Košice in Slovakia"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-gray-500">
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">
                      Central business district of Košice in Slovakia, which
                      offers a mix of tech, manufacturing and logistics careers.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="lg:mt-0 mt-8">
              <div className="prose-blue lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
                <p>
                  If your company wants to interview Ukrainian candidates, we
                  make it free and simple for you with expert translations of
                  your vacancy advertisement into Ukrainian.
                </p>
                <p>
                  You will help candidates search a Europe-wide database of
                  relevant jobs in their own language.
                </p>
                <p>
                  Fill in our contact form and add your workplace's language
                  requirements.
                </p>
                <form
                  name="employer"
                  method="POST"
                  data-netlify="true"
                  className="gap-y-6 grid grid-cols-1"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        for="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autocomplete="name"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        for="company-role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role in company
                      </label>
                      <input
                        type="text"
                        name="company-role"
                        id="company-role"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="CEO, HR, etc..."
                      />
                    </div>
                    <div>
                      <label
                        for="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        for="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Preferred language
                      </label>
                      <input
                        type="text"
                        name="language-1"
                        id="language-1"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Language 1"
                      />
                    </div>
                    <div>
                      <label
                        for="language-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Also considered
                      </label>
                      <input
                        type="text"
                        name="language-2"
                        id="language-2"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Language 2"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comments (max. 500 characters)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
