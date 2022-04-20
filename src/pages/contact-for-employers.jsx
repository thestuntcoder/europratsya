import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';
import contactImg from '../images/contact/contact-form-employers.jpg';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function ContactEmployers({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
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
        window.location.href = '/' + language + '/thank-you';
      })
      .catch((error) => alert(error));
  };

  const metaDescription = t('meta_employers_description');
  const metaTitle = t('meta_employers_title');

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
                <Trans>Helping you reach Ukrainians</Trans>
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="relative mx-auto max-w-prose text-base italic lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={contactImg}
                      alt={t('Košice in Slovakia')}
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
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
                        Central business district of Košice in Slovakia, which
                        offers a mix of tech, manufacturing and logistics
                        careers.
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
                    If your company wants to interview Ukrainian candidates, we
                    make it free and simple for you with expert translations of
                    your vacancy advertisement into Ukrainian.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    You will help candidates search a Europe-wide database of
                    relevant jobs in their own language.
                  </Trans>
                </p>
                <p>
                  <Trans>
                    Fill in our contact form and add your workplace's language
                    requirements.
                  </Trans>
                </p>
                <form
                  name="employer"
                  method="POST"
                  data-netlify="true"
                  enctype="multipart-form/data"
                  className="mt-8 grid grid-cols-1 gap-y-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="employer" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Your name</Trans>
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autocomplete="name"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t('First name, last name')}
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
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t('Your email address')}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company-role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Your role in company</Trans>
                      </label>
                      <input
                        type="text"
                        name="company-role"
                        id="company-role"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t('Your title')}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Company name</Trans>
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t('Please include GmbH, SA, Ltd, AS etc')}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Your company's URL</Trans>
                      </label>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                        placeholder={t("Your company's URL")}
                        onChange={handleChange}
                      />
                    </div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        <Trans>Preferred language</Trans>
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
                        <Trans>Also considered</Trans>
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
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      <Trans>Comments</Trans>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm placeholder:italic focus:border-blue-500 focus:ring-blue-500"
                      placeholder={t(
                        'Job description including requirements, or link to your own careers page. For part-time work or manual work please include wage estimate per hour in EUR.'
                      )}
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

export const TRANS_EMPLOYERS = graphql`
  query EmployerTranslation($language: String!) {
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
