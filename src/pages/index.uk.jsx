import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';
import JobAds from '../components/job-ads';

import ukrBg from '../images/ukr-background-new.jpg';
import ukrUniBg from '../images/ukr-universities.jpg';

import sponsorKaffebakeriet from '../images/sponsors/kaffebakeriet.jpeg';
import sponsorKodit from '../images/sponsors/kodit.png';
import sponsorSC from '../images/sponsors/stuntcoders.png';
import sponsorDT from '../images/sponsors/daytwo.svg';
import sponsorGrieg from '../images/sponsors/grieg.svg';
import sponsorTM from '../images/sponsors/tm.png';

export default function HomeUk({ data }) {
  const metaDescription =
    'Наш вебпортал допомагає в пошуках роботи тим кому необхідно створити тимчасову базу для своїх сімей за межами України. У нас також є дистанційні робочі місця, вони підійдуть кандидатам які знаходяться в України. Одна україномовна база даних для вакансій по всій Європі - безкоштовна для кандидатів і безкоштовна для роботодавців.україномовна база даних для вакансій по всій Європі - безкоштовна для кандидатів і безкоштовна для роботодавців.';
  const metaTitle =
    'Некомерційний портал вакансій для українців які шукають роботу в Європі';

  return (
    <LayoutPage lang="uk">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />

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
              Наш портал допомагає європейським роботодавцям у пошуку
              кваліфікованих українських працівників.
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
                  Кандидати
                </h3>
                <p className="mt-4 text-base text-white">
                  Кандидати Будь ласка, ознайомтеся з нашими посібниками з
                  отримання робочої візи та посібником з потреб в
                  <Link to="/uk/skills-in-demand/">
                    кардах у різних країнах
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  Потрібна домопога з перекладом резюме?
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/uk/contact-for-job-seekers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      Зв'яжіться з нами
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-blue-500 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 text-center md:px-8">
                <h3 className="text-2xl font-extrabold text-white">
                  Роботодавці
                </h3>
                <p className="mt-4 text-base text-white">
                  Щоб оцінити українські резюме, будь ласка, перегляньте наш{' '}
                  <Link to="/uk/ukr-eduction-explainer/">
                    український пояснювач освіти
                  </Link>{' '}
                  та наш{' '}
                  <Link to="/uk/ukr-expertise-explained/">
                    експертний пояснювач
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  Зареєструйтеся, щоб опублікувати свої вакансії
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/uk/contact-for-employers/"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium uppercase text-black hover:bg-gray-200"
                    >
                      Приєднуйтесь
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
              Європраця розміщує вакансії для кандидатів, яким необхідно
              створити тимчасову базу для своїх сімей за межами України. Ми
              також розміщуємо дистанційні вакансії що підійдуть працівникам які
              проживають в Україні.
            </p>
            <p>
              Одна україномовна база даних для вакансій та кваліфікацій
              потрібних в Європі – безплатно для кандидатів та роботодавців.
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
              Новітні вакансії
            </h2>
          </div>
          <JobAds limit="9" data={data.allSanityJobPost.edges} language="uk" />

          <div className="mt-8 text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/uk/vacancies"
                className="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                Переглянути всі
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
            Кілька лауреатів Нобелівської премії - Ілля Мечников, Зельман
            Ваксман і інші - з медицини, фізики, хімії та літератури народилися
            в Україні. Найстаріші українські університети засновані у 16-17
            століттях. Вони до сих пір навчають фахівців світового рівня в
            галузі науки і техніки, сільського господарства та гірництва.
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase tracking-wider text-gray-600">
            Спонсори та партнери
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src={sponsorKaffebakeriet}
                alt="Kaffebakeriet"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorKodit} alt="Kodit" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorGrieg} alt="Grieg" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorSC} alt="StuntCoders" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorDT} alt="DayTwo" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={sponsorTM} alt="Team Magnus" />
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const JOB_POSTS = graphql`
  query JobPostsUk {
    allSanityJobPost(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          city
          country {
            title {
              uk
            }
          }
          salary
          contact
          title {
            uk
          }
          description {
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
