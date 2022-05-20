import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import HomepageEnglish from '../components/homepageEnglish';
import HomepageUkranian from '../components/homepageUkranian';
import LayoutPage from '../components/layout/layout-page';

export default function Home({ data }) {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const metaDescription = t(
    'Our web portal helps job-seekers who need to set up a temporary base for their families outside Ukraine. We also post remote jobs suitable for workers based inside Ukraine. One Ukrainian-language database for skills in demand and vacancies across Europe - free for candidates and free for employers.'
  );
  const metaTitle = t(
    'Non-profit job portal for Ukrainian job-seekers in Europe'
  );

  return (
    <LayoutPage lang={language}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      {(language === 'en' || language === 'de') && (
        <HomepageEnglish language={language} data={data} />
      )}
      {language === 'uk' && <HomepageUkranian language={language} />}
    </LayoutPage>
  );
}

export const JOB_POSTS = graphql`
  query JobPostsIndex($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "index"] }
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

    allSanityJobPost(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          city
          country {
            title {
              en
              uk
              de
            }
          }
          salary
          contact
          title {
            en
            de
            uk
          }
          description {
            en {
              children {
                text
              }
            }
            de {
              children {
                text
              }
            }
            uk {
              children {
                text
              }
            }
          }
          employer {
            name
          }
          job_categories {
            title
          }
          validUntil
          slug {
            current
          }
        }
      }
    }
  }
`;
