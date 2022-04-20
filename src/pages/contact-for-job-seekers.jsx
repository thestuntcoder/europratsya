import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';
import { getUrlPrefix } from '../helpers/language';

import contactImg from '../images/contact/contact-form-candidates.jpg';
import step1 from '../images/contact/step1.svg';
import step2 from '../images/contact/step2.svg';
import step3 from '../images/contact/step3.svg';
import step4 from '../images/contact/step4.svg';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function ContactEmployees({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

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
      .then(() => {
        window.location.href = getUrlPrefix(language) + '/thank-you';
      })
      .catch((error) => alert(error));
  };

  const metaDescription = t('meta_candidates_description');
  const metaTitle = t('meta_candidates_title');

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <Navigation lang={language} />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="absolute left-3/4 top-0 bottom-0 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-base text-3xl font-bold tracking-wide text-black">
                <Trans>Helping you support Ukraine</Trans>
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={contactImg}
                      alt="Employee at Farmasoft's logistics facilities in Kyiv"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm italic text-gray-500">
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
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
                      <Trans>
                        Employee at Farmasoft's logistics facilities in Kyiv.
                        Their staff has provided expert services to the
                        pharmaceutical and life sciences industry in Ukraine
                        since 1999.
                      </Trans>
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose-blue prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  <Trans>
                    We help Ukrainian speakers set up a base for the short or
                    long term outside Ukraine's borders. We also help residents
                    of Ukraine find remote work.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    To save you time, we will translate your CV into either
                    English or German free of charge.
                  </Trans>
                </p>
                <div className="mt-4 mb-8 grid grid-cols-4 gap-2 rounded-lg bg-blue-500 p-4 text-center text-sm text-white shadow-lg">
                  <div>
                    <img
                      className="object-cover object-center"
                      src={step1}
                      alt="Step 1"
                    />
                    <Trans>Upload your CV</Trans>
                  </div>
                  <div>
                    <img
                      className="object-cover object-center"
                      src={step2}
                      alt="Step 2"
                    />
                    <Trans>We check and adapt</Trans>
                  </div>
                  <div>
                    <img
                      className="object-cover object-center"
                      src={step3}
                      alt="Step 3"
                    />
                    <Trans>CV gets translated</Trans>
                  </div>
                  <div>
                    <img
                      className="object-cover object-center"
                      src={step4}
                      alt="Step 4"
                    />
                    <Trans>Ready to apply for vacancies</Trans>
                  </div>
                </div>
                <form
                  name="candidateUploads"
                  method="POST"
                  data-netlify="true"
                  enctype="multipart-form/data"
                  className="grid grid-cols-1 gap-y-6"
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
                        <Trans>Full name</Trans>
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autocomplete="name"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500  focus:ring-blue-500"
                        placeholder={t('Full name')}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Email</Trans>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500  focus:ring-blue-500"
                        placeholder={t('Your email address')}
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
                        <Trans>First language</Trans>
                      </label>
                      <input
                        type="text"
                        name="language-1"
                        id="language-1"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t('Language 1')}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="language-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Second language</Trans>
                      </label>
                      <input
                        type="text"
                        name="language-2"
                        id="language-2"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t('Language 2')}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="file"
                      lassName="block text-sm font-medium text-gray-700"
                    >
                      <Trans>Upload CV</Trans>
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
                      onChange={handleAttachment}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="translated"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <Trans>To be translated into</Trans>
                    </label>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          <Trans>English</Trans>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          <Trans>German</Trans>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 placeholder:italic"
                    >
                      <Trans>Comments (max. 200 characters)</Trans>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                      placeholder={t('Message')}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <Trans>Submit</Trans>
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

export const TRANS_EMPLOYEES = graphql`
  query EmployeeTranslation($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "contact"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
