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
                Можливості для безкоштовної освіти - старша школа
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
                <h2 className="text-base text-2xl font-bold tracking-wide text-black">
                  Покроковий посібник по завершенню вищої середньої освіти.
                </h2>
                <p>
                  <strong>Рішення міністерства освіти:</strong>
                  <br />
                  Замість традиційного ЗНО міністерство освіти планує провести
                  Національний мультипредметний тест, що відбуватиметься у формі
                  онлайн тестування. Тест складатиметься з трьох предметів:
                  українська мова, математика, історія України.
                  <a href="https://mon.gov.ua/ua/news/vidbuvsya-onlajn-brifing-shodo-vstupnoyi-kampaniyi-v-2022-roci">
                    Посилання на брифінг міністерства.
                  </a>
                </p>
                <p>
                  Інформацію, щодо дистанційного навчання можна знайти
                  <a href="https://mon.gov.ua/ua/news/distancijni-shkoli-ta-navchalni-platformi-nadayut-bezkoshtovnij-dostup-dlya-zdobuvachiv-osviti">
                    тут
                  </a>
                  .
                </p>
                <p>
                  Уряд зазначив, що абітурієнти матимуть також писати
                  мотиваційні листи для вступу на бакалаврат.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Допоміжні ресурси українською
                </h2>
                <p>
                  Наступні безкоштовні ресурси можуть допомогти у підготовці до
                  тестування:
                </p>
                <p>
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+UKR101+2017_T1/about">
                    Українська мова
                  </a>
                  ,{' '}
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+MATH101+2017_T1/about">
                    математика
                  </a>
                  , and{' '}
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+HISTORY101+2017_T1/about">
                    історія України
                  </a>
                  .
                </p>
                <p>
                  Тут можна знайти{' '}
                  <a href="https://zno.mavka.org/chooseTest">
                    безкоштовні вправи
                  </a>{' '}
                  з цих предметів.
                </p>
                <p>
                  Естонія надає безкоштовні навчальні ресурси як підтримку для
                  учнів старшої школи в Україні. Їх можна знайти
                  <a href="https://www.edtechestonia.org/ukraine-ua">тут</a>.
                </p>
                <p>
                  На <a href="https://zno.osvita.ua/">цьому сайті</a> можна
                  знайти приклади минулорічних ЗНО.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Допоміжні ресурси англійською
                </h2>
                <p>
                  MIT, США надає{' '}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFnl5405N6vq2VqV9bsMvw2DWWai2zUv42aZ_HvItuBSd5ug/viewform">
                    програму підтримки
                  </a>{' '}
                  українською мовою для талановитих математиків з 9-11 класів.
                  ПОДАННЯ ЗАЯВ ДО 12.04.2022. Приблизно 30 учнів старшої школи
                  зможуть навчатися українською, російською та англійською в
                  безкоштовній освітній програмі з математики. Курс починається
                  в кінця квітня. Якщо ти пропустив дедлайн - введи Ukraine у
                  пошуку на{' '}
                  <a href="https://www.mit.edu/">головній сторінці MIT</a>, щоб
                  звернутися за допомогою.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
