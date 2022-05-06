import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';

export default function ThankYou({ data }) {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>
          <Trans>Thank you!</Trans>
        </title>
      </Helmet>

      <div className="relative">
        <Navigation lang={language} />
      </div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                <Trans>Thank you very much!</Trans>
              </h1>
            </div>
          </div>
          <div className="mt-8">
            <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                <Trans>
                  Europratsya is working hard on matching job seekers from
                  Ukraine to amazing companies such as yours all over the EU.
                </Trans>
              </p>
              <p>
                <Trans>
                  Somebody from our team will get back to you within 24 hours.
                </Trans>
              </p>
              <p className="mt-8">
                <Trans>
                  Regards from Kristine, Beatrice and Dejan in the Europratsya
                  team
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const THANK_YOU = graphql`
  query ThankYou($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "thank-you"] }
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
