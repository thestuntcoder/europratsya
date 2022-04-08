import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../../components/layout/layout-page';
import NavCenter from '../../components/layout/nav-center.uk';
import helicopterImg from '../../images/free-education/tips-high-school.jpg';
import yuliaImg from '../../images/free-education/yulia.jpg';

export default function HighSchool() {
  const metaDescription =
    'Ukrainian education authorities are planning one single 2022 exam testing Ukrainian language, history and maths.';
  const metaTitle = 'Tips to complete high school for Ukrainians';

  return (
    <LayoutPage lang="uk">
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
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Поради щодо закінчення середньої школи
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={helicopterImg}
                      alt="Foldable paper model of the trailblazing US army helicopter designed by aviation pioneer Igor Sikorsky"
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
                      Складна паперова модель перспективного гелікоптера армії
                      США, розробленого піонером авіації Ігорем Сікорським
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="relative mx-auto max-w-prose text-base lg:max-w-none mt-8">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={yuliaImg}
                      alt="Yulia Zdanovska won silver at the 2017 European Girls' Mathematical Olympiad. To honor her memory as a maths teacher in Kharkiv MIT offers tailored coursework for Ukrainian high school pupils."
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
                      Юлія Здановська завоювала срібло на Європейській олімпіаді
                      з математики серед дівчат 2017 року. На вшанування її
                      пам’яті як вчитель математики в Харківському МІТ пропонує
                      курсові роботи для українських старшокласників.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Українські органи освіти планують у 2022 році один єдиний
                  іспит з української мови, історії та математики.
                </p>
                <p>
                  Інформацію українського уряду про дистанційне навчання можна
                  знайти{' '}
                  <a href="https://mon.gov.ua/ua/news/distancijni-shkoli-ta-navchalni-platformi-nadayut-bezkoshtovnij-dostup-dlya-zdobuvachiv-osviti">
                    тут
                  </a>
                  .
                </p>
                <p>
                  Вони радять всім випускникам 2022 року написати мотиваційний
                  лист, щоб підготуватися до осінніх заяв на подальшу освіту.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Бонусні ресурси укр
                </h2>
                <p>
                  Будь ласка, перегляньте наведені нижче безкоштовні ресурси,
                  щоб підготуватися до іспиту в кінці року.
                </p>
                <p>
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+UKR101+2017_T1/about">
                    Українська мова та література
                  </a>
                  ,{' '}
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+MATH101+2017_T1/about">
                    математика
                  </a>
                  , and{' '}
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+HISTORY101+2017_T1/about">
                    Історія
                  </a>
                  .
                </p>
                <p>
                  Перевірте ці безкоштовні вправи з{' '}
                  <a href="https://zno.mavka.org/chooseTest">трьох предметів</a>
                  .
                </p>
                <p>
                  Естонія підтримує українських старшокласників ресурсами,{' '}
                  <a href="https://www.edtechestonia.org/ukraine-ua">
                    доступними тут
                  </a>
                  .
                </p>
                <p>
                  Також перевірте цей{' '}
                  <a href="https://zno.osvita.ua/">
                    український веб-сайт із державними екзаменами попередніх
                    років для старшокласників
                  </a>
                  .
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Бонусні ресурси EN
                </h2>
                <p>
                  MIT, US offers a{' '}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFnl5405N6vq2VqV9bsMvw2DWWai2zUv42aZ_HvItuBSd5ug/viewform">
                    Ukrainian-language support programme
                  </a>{' '}
                  for talented mathematicians in yr 9-11. APPLY BY 12.04.22.
                  Approx 30 Ukrainian high school children will be taught in
                  Ukrainian, Russian and English in a free math enrichment
                  programme. The course starts in late April. Should you miss
                  it, search "Ukraine" on{' '}
                  <a href="https://www.mit.edu/">MITs home page</a> to check for
                  further support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
