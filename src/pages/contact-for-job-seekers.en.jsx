import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import contactImg from '../images/contact/contact-form-candidates.jpg';

export default function ContactEmployees() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Contact for Ukrainian job seekers | Europratsya</title>
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
                Helping you support Ukraine
              </h2>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8">
            <div className="lg:row-start-1 lg:col-start-2 relative">
              <div className="max-w-prose lg:max-w-none relative mx-auto text-base">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center rounded-lg shadow-lg"
                      src={contactImg}
                      alt="Employee at Farmasoft's logistics facilities in Kyiv"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-gray-500 italic">
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
                      Employee at Farmasoft's logistics facilities in Kyiv.
                      Their staff has provided expert services to the
                      pharmaceutical and life sciences industry in Ukraine since
                      1999.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="lg:mt-0 mt-8">
              <div className="prose-blue lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
                <p>
                  We help Ukrainian speakers set up a base for the short or long
                  term outside Ukraine's borders. We also help residents of
                  Ukraine find remote work.
                </p>
                <p>
                  To save you time, we will translate your CV into either
                  English or German free of charge.
                </p>
                <form
                  action="#"
                  method="POST"
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
                        for="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First language
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
                        Second language
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
                    <label className="block text-sm font-medium text-gray-700">
                      Upload CV
                    </label>
                    <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="w-12 h-12 mx-auto text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            className="hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 relative font-medium text-blue-600 bg-white rounded-md cursor-pointer"
                          >
                            <span>Upload a CV file or drag and drop</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PDF, JPG, DOC, DOCX up to 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      for="translated"
                      className="block text-sm font-medium text-gray-700"
                    >
                      To be translated into
                    </label>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-blue-500 w-4 h-4 text-blue-600 border-gray-300"
                        />
                        <label
                          for="push-everything"
                          className="block ml-3 text-sm font-medium text-gray-700"
                        >
                          English
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-blue-500 w-4 h-4 text-blue-600 border-gray-300"
                        />
                        <label
                          for="push-email"
                          className="block ml-3 text-sm font-medium text-gray-700"
                        >
                          German
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      for="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comments (max. 200 characters)
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
