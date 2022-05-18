import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import LayoutPage from '../components/layout/layout-page';
import Navigation from '../components/layout/navigation';
import JobAds from '../components/job-ads';

// assets
import ukrBg from '../images/ukr-background-new.jpg';
import ukrUniBg from '../images/ukr-universities.jpg';

import sponsorKaffebakeriet from '../images/sponsors/kaffebakeriet.jpeg';
import sponsorKodit from '../images/sponsors/kodit.png';
import sponsorSC from '../images/sponsors/stuntcoders.png';
import sponsorDT from '../images/sponsors/daytwo.svg';
import sponsorGrieg from '../images/sponsors/grieg.svg';
import sponsorTM from '../images/sponsors/tm.png';

// icons
import magnifyingGlass from '../images/icons/vacancies-03.svg';
import trainIcon from '../images/icons/move-03.svg';
import calculator from '../images/icons/calculator-03.svg';
import cv from '../images/icons/cv-help-03.svg';

// English Homepage component
function HomepageEnglish({ language, data }) {
  const { t, i18n } = useTranslation();

  return (
    <main>
      <div className="relative">
        <Navigation lang={language} />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt={t('We welcome Ukrainians to European Union.')}
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              {t(
                'Our portal assists European employers in finding skilled Ukrainian workers.'
              )}
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-gray-800 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  <Trans>Candidates</Trans>
                </h3>
                <p className="mt-4 text-base text-white">
                  <Trans>
                    Please check our work visa guides and skills shortages guide
                  </Trans>
                  <Link to="/skills-in-demand/">
                    <Trans>country by country</Trans>
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  <Trans>Do you need CV translation help?</Trans>
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/contact-for-job-seekers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      <Trans>Contact us</Trans>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-blue-500 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  <Trans>Employers</Trans>
                </h3>
                <p className="mt-4 text-base text-white">
                  <Trans>To evaluate Ukrainian CVs, please check our</Trans>
                  {` `}
                  <Link to="/ukr-eduction-explainer/">
                    <Trans>UKR education explainer</Trans>
                  </Link>{' '}
                  <Trans>and our</Trans>{' '}
                  <Link to="/ukr-expertise-explained/">
                    <Trans>UKR expertise explainer</Trans>
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  <Trans>Register to post your vacancies</Trans>
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/contact-for-employers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      <Trans>Join</Trans>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
            <p>
              <Trans>
                Europratsya post jobs for candidates who need to set up a
                temporary base for their families outside Ukraine. We also post
                remote jobs suitable for workers based inside Ukraine.
              </Trans>
            </p>
            <p>
              <Trans>
                One Ukrainian-language database for skills in demand and
                vacancies across Europe - free for candidates and employers.
              </Trans>
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
              <Trans>Latest vacancies</Trans>
            </h2>
          </div>
          <JobAds
            limit="9"
            language={language}
            data={data.allSanityJobPost.edges}
          />

          <div className="mt-8 text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/vacancies"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                <Trans>See all vacancies</Trans>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-3/4 bg-gray-100">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={ukrUniBg}
            alt="Ukrainian universities"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-30" />
        <div className="z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="z-10 m-auto mx-auto mt-64 mb-64 text-center align-middle text-4xl font-extrabold text-white">
            <Trans>
              Several Nobel prize winners in medicine, physics, chemistry and
              literature hail from Ukraine. Its oldest universities are from the
              16th and 17th century, and continue to produce world-class
              graduates in sciences, engineering, agriculture and mining.
            </Trans>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
            <Trans>Sponsors and partners</Trans>
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="190"
                height="48"
                src={sponsorKaffebakeriet}
                alt="Kaffebakeriet"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="200"
                height="48"
                src={sponsorKodit}
                alt="Kodit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="48"
                height="48"
                src={sponsorGrieg}
                alt="Grieg"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="304"
                height="48"
                src={sponsorSC}
                alt="StuntCoders"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="230"
                height="48"
                src={sponsorDT}
                alt="DayTwo"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="210"
                height="48"
                src={sponsorTM}
                alt="Team Magnus"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Ukranian Homepage component
function HomepageUkranian({ language }) {
  return (
    <main>
      <div className="relative">
        <Navigation lang={language} />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt="We welcome Ukrainians to European Union."
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              Усе, що необхідно для успішного робочого переїзду
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 2xl:max-w-[80%] xl:max-w-[95%] px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-2 md:gap-x-2 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-2">
            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={magnifyingGlass}
                alt="Icon of Magnifying Glass"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Шукаєте
                <br /> роботу?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                <span className="font-extrabold text-[#D6D648] ">
                  OУ нашій базі вакансій можна знайти роботу
                </span>{' '}
                для тих, хто говорить лише українською та російською і для
                кандидатів із базовими знаннями англійської, французької чи
                німецької. Ми співпрацюємо з європейськими роботодавцями, які
                охоче допомагають українцям, що були змушені виїхати за кордон.
              </p>
              <Link
                to="/vacancies"
                className="w-10/12 mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Вакансії
              </Link>
            </div>

            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={trainIcon}
                alt="Icon of a train"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Плануєте
                <br /> переїхати за <br /> кордон?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                <span className="font-extrabold text-[#D6D648] ">
                  У нас зібрана інформація щодо працевлаштування
                </span>{' '}
                українців у країнах Європи. Тут можна дізнатисяу, де потрібен
                ваш досвід, як отримати робочу візу, а також як отримати
                акредитацію вашого рівня кваліфікації. <br />
                <br />
                Уся доступна інформація{' '}
                <span className="font-extrabold text-[#D6D648] ">
                  перевірена на урядових вебсайтах.
                </span>
              </p>
              <Link
                to="/"
                className="mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Корисна інформація
              </Link>
            </div>

            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={calculator}
                alt="Icon of a calculator"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Є питання
                <br />
                щодо
                <br />
                зарплати?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                Тут ви можете перевірити, чи роботодавець пропонує
                <span className="font-extrabold text-[#D6D648] ">
                  справедливу оплату праці.
                </span>{' '}
                <br />
                <br />
                Кожного тижня ми додаємо нові країни та сектори, щоб ви мали
                можливість{' '}
                <span className="font-extrabold text-[#D6D648] ">
                  перевірити чи вам платять відповідно до ринкової ставки.
                </span>
              </p>
              <Link
                to="/"
                className="mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Перевірити рівень ЗП
              </Link>
            </div>

            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={cv}
                alt="Icon of CV"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Потрібна
                <br /> допомога з <br /> резюме?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                <span className="font-extrabold text-[#D6D648] ">
                  Ми перекладаємо CV з української чи російської
                </span>{' '}
                на англійську мову протягом 2-3 днів. Ми також даємо поради щодо
                наповнення та оформлення СV, щоб збільшити ваші шанси попасти на
                співбесіду.
              </p>
              <Link
                to="/"
                className="w-10/12 mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Допомога з CV
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="prose prose-indigo prose-lg mx-auto mt-6 text-gray-500">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-yellow-400 sm:text-4xl"></h2>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/vacancies"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-3/4 bg-gray-100">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={ukrUniBg}
            alt="Ukrainian universities"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-30" />
        <div className="z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="z-10 m-auto mx-auto mt-64 mb-64 text-center align-middle text-4xl font-extrabold text-white"></div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600"></p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="190"
                height="48"
                src={sponsorKaffebakeriet}
                alt="Kaffebakeriet"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="200"
                height="48"
                src={sponsorKodit}
                alt="Kodit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="48"
                height="48"
                src={sponsorGrieg}
                alt="Grieg"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="304"
                height="48"
                src={sponsorSC}
                alt="StuntCoders"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="230"
                height="48"
                src={sponsorDT}
                alt="DayTwo"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                width="210"
                height="48"
                src={sponsorTM}
                alt="Team Magnus"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// MAIN HOMEPAGE COMPONENT
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

      {/* conditional rendering for the homepage depending on the selected language */}
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
