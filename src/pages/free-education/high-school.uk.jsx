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
                Tips to complete high school
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
                      Foldable paper model of the trailblazing US army
                      helicopter designed by aviation pioneer Igor Sikorsky
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
                      Yulia Zdanovska won silver at the 2017 European Girls'
                      Mathematical Olympiad. To honor her memory as a maths
                      teacher in Kharkiv MIT offers tailored coursework for
                      Ukrainian high school pupils.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Ukrainian education authorities are planning one single 2022
                  exam testing Ukrainian language, history and maths.
                </p>
                <p>
                  Ukrainian government information on remote learning can be
                  found{' '}
                  <a href="https://mon.gov.ua/ua/news/distancijni-shkoli-ta-navchalni-platformi-nadayut-bezkoshtovnij-dostup-dlya-zdobuvachiv-osviti">
                    here
                  </a>
                  .
                </p>
                <p>
                  They advice that all high school leavers in 2022 write a
                  motivation letter to prepare themselves for autumn
                  applications for further education.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Bonus resources UKR
                </h2>
                <p>
                  Please check the following free resources to prepare for the
                  end of year exam.
                </p>
                <p>
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+UKR101+2017_T1/about">
                    Ukrainian language and literature
                  </a>
                  ,{' '}
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+MATH101+2017_T1/about">
                    Maths
                  </a>
                  , and{' '}
                  <a href="https://courses.prometheus.org.ua/courses/course-v1:ZNO+HISTORY101+2017_T1/about">
                    History
                  </a>
                  .
                </p>
                <p>
                  Please check these{' '}
                  <a href="https://zno.mavka.org/chooseTest">free exercises</a>{' '}
                  from the three subjects.
                </p>
                <p>
                  Estonia supports Ukrainian high school students with{' '}
                  <a href="https://www.edtechestonia.org/ukraine-ua">
                    resources accessed here
                  </a>
                  .
                </p>
                <p>
                  Also check this{' '}
                  <a href="https://zno.osvita.ua/">
                    Ukrainian website with previous years’ state exams
                  </a>{' '}
                  for high school students.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Bonus resources EN
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
