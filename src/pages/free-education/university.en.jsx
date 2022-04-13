import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../../components/layout/layout-page';
import NavCenter from '../../components/layout/nav-center';
import polarImg from '../../images/free-education/vernadsky-polar-research-station.jpg';
import mitCoursesImg from '../../images/free-education/mit-courses.jpg';

export default function University() {
  const metaDescription =
    'Ukrainian education authorities are planning one single 2022 exam testing Ukrainian language, history and maths.';
  const metaTitle = 'Tips to complete high school for Ukrainians';

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
          <div className="left-3/4 bg-gray-50 lg:block absolute top-0 bottom-0 hidden w-screen" />
          <div className="max-w-prose lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8 mx-auto text-base">
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Tips to complete university
              </h1>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8">
            <div className="lg:col-start-2 lg:row-start-1 relative">
              <svg
                className="lg:block absolute top-0 right-0 hidden -mt-20 -mr-20"
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
              <div className="max-w-prose lg:max-w-none relative mx-auto text-base">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center rounded-lg shadow-lg"
                      src={polarImg}
                      alt="Vernadsky polar research station"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm italic text-gray-500">
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
                      Vernadsky polar research station. 12 Ukrainian scientists
                      winter here for 10 months in extreme conditions,
                      delivering widely acclaimed climate change research.{' '}
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="max-w-prose lg:max-w-none relative mx-auto mt-8 text-base">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center rounded-lg shadow-lg"
                      src={mitCoursesImg}
                      alt="Learners from anywhere in the world can enrol in an MIT course of their choosing and learn at no cost"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm italic text-gray-500">
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
                      Learners from anywhere in the world can enroll in an MIT
                      course of their choosing and learn at no cost, or aim to
                      earn a certificate of completion for a low fee.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="lg:mt-0 mt-8">
              <div className="prose-indigo lg:col-start-1 lg:row-start-1 lg:max-w-none mx-auto text-lg prose text-gray-500">
                <p>
                  Individual faculties will guide you on level of disruption and
                  advice for your specific course.
                </p>
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Bonus resources UKR
                </h2>
                <p>
                  You can access free online courses with certificates in
                  Ukrainian{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="http://prometheus.org.ua/"
                  >
                    here
                  </a>{' '}
                  and{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="https://vumonline.ua/"
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  The language courses listed are free for Ukrainians:{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="http://busuu.com/ru/c/ukraina-navchaisya-bezkoshtovnonians/"
                  >
                    Mondly, 3 month courses for 13 different languages and Busuu
                  </a>
                  .
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Bonus resources EN
                </h2>
                <p>
                  Free course material for a range of STEM subjects is offered
                  by MITs{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="https://ocw.mit.edu/"
                  >
                    OpenCourseWare
                  </a>
                  . Check the online publication of materials from over 2,500
                  MIT courses to prepare for exams in your chosen field.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Low cost international accreditations and certifications
                </h2>
                <p>
                  One of the best free online offers globally is from MIT, US.
                  They offer two platforms{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="https://www.edx.org/"
                  >
                    edX
                  </a>{' '}
                  and{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="https://mitxonline.mit.edu/"
                  >
                    MITx Online for their massive, open, online courses
                  </a>
                  . They range from{' '}
                  <a
                    className="hover:underline text-blue-500"
                    href="https://openlearning.mit.edu/mit-students/first-year-stem-classes-mit"
                  >
                    foundational STEM courses
                  </a>
                  , through explorations of the humanities and social sciences,
                  to advanced master’s level subjects that may fast-track a
                  master’s degree.
                </p>
                <p>
                  <a
                    className="hover:underline text-blue-500"
                    href="https://openlearning.mit.edu/courses-programs/mitx-courses-edx"
                  >
                    MITx courses
                  </a>{' '}
                  come directly from the MIT classroom and span the full breadth
                  of the world-leading university’s academic programs.
                </p>
                <p>
                  Learners from anywhere in the world can enrol in a course of
                  their choosing and learn at no cost, or aim to earn a
                  certificate of completion for a low fee. MITx courses are
                  educational experiences that include interactions, such as
                  problems that provide immediate feedback, discussion forums,
                  videos, readings, and tools that deepen their learning.
                </p>
                <p>
                  Also check out Coursera, another prestigious provider of
                  massive, open, online courses. Choose between day-long courses
                  which lead to certifications, low price, fully remote
                  bachelor’s and master’s degrees and 100% free courses from the
                  world’s most famous universities. If your Ukrainian university
                  has applied, you might be eligible for free access to the
                  entire programme, including the degree courses.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Scholarships
                </h2>
                <p>
                  Current students and prospective applicants can check for
                  scholarship opportunities here:
                </p>
                <ul>
                  <li>
                    <a
                      className="hover:underline text-blue-500"
                      href="https://uglobal.university/"
                    >
                      https://uglobal.university/
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline text-blue-500"
                      href="https://support.uastudents.de/"
                    >
                      https://support.uastudents.de/
                    </a>
                  </li>
                  <li>
                    Estonia offers{' '}
                    <a
                      className="hover:underline text-blue-500"
                      href="https://ut.ee/en/content/bachelors-and-masters-studies-university-tartu"
                    >
                      250 free bachelor programs
                    </a>
                    .
                  </li>
                  <li>
                    Please check the{' '}
                    <a
                      className="hover:underline text-blue-500"
                      href="https://www.russellgroup.ac.uk/news/russell-group-universities-response-to-the-invasion-of-ukraine/"
                    >
                      support offered by the 24 leading universities in the UK
                    </a>{' '}
                    (known as the Russell Group) aimed at displaced Ukrainian
                    university students.
                  </li>
                  <li>
                    Here’s an overview of scholarships for Ukrainians in
                    European countries:{' '}
                    <a
                      className="hover:underline text-blue-500"
                      href="https://www.scholars-ua.com/"
                    >
                      https://www.scholars-ua.com/
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
