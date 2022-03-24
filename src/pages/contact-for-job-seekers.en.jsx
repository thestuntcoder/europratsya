import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import contactImg from '../images/contact/contact-form-candidates.jpg';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function ContactEmployees() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => alert('Thank you for your submission!'))
      .catch((error) => alert(error));
  };

  const metaDescription =
    'Europratsya translates your CV into English or German for free to help you focus on finding work and planning interviews.';
  const metaTitle = 'Time-saving CV help for Ukrainians';

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 py-16 mx-auto">
          <div className="lg:block bg-gray-50 left-3/4 absolute top-0 bottom-0 hidden w-screen" />
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
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
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
                  name="candidateUploads"
                  method="POST"
                  data-netlify="true"
                  enctype="multipart-form/data"
                  className="gap-y-6 grid grid-cols-1"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="candidateUploads"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="full-name"
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
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
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
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
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
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="language-2"
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
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="file"
                      lassName="block text-sm font-medium text-gray-700"
                    >
                      Upload CV
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                      onChange={handleAttachment}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="translated"
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
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="push-everything"
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
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="push-email"
                          className="block ml-3 text-sm font-medium text-gray-700"
                        >
                          German
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
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
                      onChange={handleChange}
                    />
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
