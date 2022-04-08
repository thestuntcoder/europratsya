import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../../components/layout/layout-page';
import NavCenter from '../../components/layout/nav-center.uk';
import polarImg from '../../images/free-education/vernadsky-polar-research-station.jpg';
import mitCoursesImg from '../../images/free-education/mit-courses.jpg';

export default function UniversityUk() {
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
                Tips to complete university
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
                      src={polarImg}
                      alt="Vernadsky polar research station"
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
                      Vernadsky polar research station. 12 Ukrainian scientists
                      winter here for 10 months in extreme conditions,
                      delivering widely acclaimed climate change research.{' '}
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="relative mx-auto max-w-prose text-base lg:max-w-none mt-8">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={mitCoursesImg}
                      alt="Learners from anywhere in the world can enrol in an MIT course of their choosing and learn at no cost"
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
                      Learners from anywhere in the world can enrol in an MIT
                      course of their choosing and learn at no cost, or aim to
                      earn a certificate of completion for a low fee.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Individual faculties will guide you on level of disruption and
                  advice for your specific course.
                </p>
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Bonus resources UKR
                </h2>
                <p>
                  You can access free online courses with certificates in
                  Ukrainian <a href="http://prometheus.org.ua/">here</a> and{' '}
                  <a href="https://vumonline.ua/">here</a>.
                </p>
                <p>
                  The language courses listed are free for Ukrainians:{' '}
                  <a href="http://busuu.com/ru/c/ukraina-navchaisya-bezkoshtovnonians/">
                    Mondly, 3 month courses for 13 different languages and Busuu
                  </a>
                  .
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Bonus resources EN
                </h2>
                <p>
                  Free course material for a range of STEM subjects is offered
                  by MITs <a href="https://ocw.mit.edu/">OpenCourseWare</a>.
                  Check the online publication of materials from over 2,500 MIT
                  courses to prepare for exams in your chosen field.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Low cost international accreditations and certifications
                </h2>
                <p>
                  One of the best free online offers globally is from MIT, US.
                  They offer two platforms{' '}
                  <a href="https://www.edx.org/">edX</a> and{' '}
                  <a href="https://mitxonline.mit.edu/">
                    MITx Online for their massive, open, online courses
                  </a>
                  . They range from{' '}
                  <a href="https://openlearning.mit.edu/mit-students/first-year-stem-classes-mit">
                    foundational STEM courses
                  </a>
                  , through explorations of the humanities and social sciences,
                  to advanced master’s level subjects that may fast-track a
                  master’s degree.
                </p>
                <p>
                  <a href="https://openlearning.mit.edu/courses-programs/mitx-courses-edx">
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
                    <a href="https://uglobal.university/">
                      https://uglobal.university/
                    </a>
                  </li>
                  <li>
                    <a href="https://support.uastudents.de/">
                      https://support.uastudents.de/
                    </a>
                  </li>
                  <li>
                    Estonia offers{' '}
                    <a href="https://ut.ee/en/content/bachelors-and-masters-studies-university-tartu">
                      250 free bachelor programs
                    </a>
                    .
                  </li>
                  <li>
                    Please check the{' '}
                    <a href="https://www.russellgroup.ac.uk/news/russell-group-universities-response-to-the-invasion-of-ukraine/">
                      support offered by the 24 leading universities in the UK
                    </a>{' '}
                    (known as the Russell Group) aimed at displaced Ukrainian
                    university students.
                  </li>
                  <li>
                    Here’s an overview of scholarships for Ukrainians in
                    European countries:{' '}
                    <a href="https://www.scholars-ua.com/">
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
