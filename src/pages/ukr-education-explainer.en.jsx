import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import kyivAcademy from '../images/education/library-kyiv-mohyla-academy.jpg';

export default function UkrEducationExplainer() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Ukraine education explained | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="bg-white overflow-hidden">
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/education/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-black font-bold text-3xl tracking-wide">
                Ukraine education FAQ
              </h1>

              <div class="relative text-base float-right max-w-xs">
                <figure>
                  <div class="max-w-md aspect-w-12 aspect-h-12 ml-8">
                    <StaticImage
                      class="rounded-lg shadow-lg object-cover object-center"
                      src="../images/education/assembly-hall-kyiv-polytechnic-institute.jpg"
                      alt="Assembly hall Kyiv Polytechnic Institute"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption class="mt-3 flex text-sm text-gray-500">
                    <svg
                      class="flex-none w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="ml-2">
                      Images from top: Igor Sikorsky Kyiv Polytechnic Institute,
                      Kharkiv National Medical University, Lakshya MBBS (Medical
                      school), Hlukhiv National Pedagogical University, assembly
                      hall of the National Technical University of Ukraine Kyiv
                      Polytechnic Institute and (below) research library of
                      National University of Kyiv-Mohyla Academy.
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="prose prose-indigo text-gray-500 text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p className="mt-24">
                  Ukraine has a 99.4% literacy rate, the highest in the world.
                  Check our explainer for a quick guide to their highly ranked
                  education system.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Which are the hardest universities to get into in Ukraine?
                </h2>
                <p>
                  Taras Shevchenko National University of Kyiv Ivan Franko
                  National University of Lviv V. N. Karazin Kharkiv National
                  University.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  What is the grading system at Ukrainian universities?
                </h2>
                <p>
                  Degrees are awarded either on a<br />
                  100 points scale (90-100 = excellent, 70-89 = good, 50-69 =
                  satisfactory, 0-49 = unsatisfactory)
                </p>
                <p>or a</p>
                <p>
                  5 point national scale (5 = excellent, 4 = good, 3=
                  satisfactory, 2-1= unsatisfactory)
                  <br />
                  Recent graduates use the European Credit Transfer and
                  Accumulation scale. They convert differently for 2 year
                  degrees and 4 year degrees, please check the table below
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  ECTS Grading scale
                </h2>

                <table class="table-fixed border-collapse text-sm border border-slate-200 rounded-xl">
                  <thead>
                    <tr>
                      <th className="border-b font-medium bg-slate-200 p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
                        GRADE
                      </th>
                      <th className="border-b font-medium bg-slate-200 p-4 pt-0 pb-3 text-slate-400 text-left">
                        WES UNDERGRADUATE CONVERSION
                      </th>
                      <th className="border-b font-medium bg-slate-200 p-4 pr-8 pt-0 pb-3 text-slate-400s text-left">
                        WES GRADUATE CONVERSION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td>A</td>
                      <td>A</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>B</td>
                      <td>B+</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>B</td>
                      <td>B+</td>
                    </tr>
                    <tr>
                      <td>D</td>
                      <td>C+</td>
                      <td>B</td>
                    </tr>
                    <tr>
                      <td>E</td>
                      <td>C</td>
                      <td>B</td>
                    </tr>
                    <tr>
                      <td>F</td>
                      <td>F</td>
                      <td>F</td>
                    </tr>
                  </tbody>
                </table>
                <figure>© 2019 World Education Services (wenr.wes.org)</figure>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  What do the qualifications mean?
                </h2>
                <p>
                  <ul>
                    <li>
                      Junior Bachelor (Molodshyi Bakalavr)- first level of
                      higher education equals 2 years of studying
                    </li>
                    <li>
                      Bachelor (Bakalavr) - higher education equals 4 years of
                      studying
                    </li>
                    <li>
                      Master (Magistr) - advanced academic or professional
                      training
                    </li>
                    <li>
                      Doctor of Philosophy/Art and Doctor of Science - the
                      highest education level
                    </li>
                  </ul>
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Some applicants are from colleges and some from unis - what is
                  the difference?
                </h2>
                <p>
                  Colleges offer vocational training, similar to apprenticeships
                  for mechanics, electricians and chefs, for youth from the age
                  of 15. With a college qualification you will be entitled to
                  apply for university places alongside school-leavers who
                  attended a full 12 years of school.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  I'm looking at Ukrainian secondary school grades - there seem
                  to be two grading systems?
                </h2>
                <p>
                  School leavers <strong>after 2012</strong> are graded by a
                  12-point system:
                  <ul>
                    <li>10-12 (excellent, equivalent to A),</li>
                    <li>7-9 (good, equivalent to B),</li>
                    <li>4-6 (satisfactory, equivalent to C) and</li>
                    <li>1-3 (unsatisfactory, equivalent to F)</li>
                  </ul>
                </p>

                <p>
                  School leavers <strong>before 2012</strong> were graded by a
                  5-point system:
                  <ul>
                    <li>5 (excellent),</li>
                    <li>4 (good),</li>
                    <li>3 (satisfactory)</li>
                    <li>1-2 (unsatisfactory)</li>
                  </ul>
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Some applicants went to school for 11 years and others for 12
                  - why?
                </h2>
                <p>
                  Ukraine extended compulsory schooling to 12 years in 2018.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  What’s the Ukrainian school curriculum like?
                </h2>
                <p>
                  Students are taught 1 or 2 foreign languages (English and
                  German are the most common), mathematics, chemistry, physics,
                  biology as well as all general subjects
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Anything you recommend I check in a Ukrainian CV?
                </h2>
                <p>
                  All academic institutions in Ukraine must have a license and
                  can’t issue degrees or diplomas without accreditation from
                  MOES.
                </p>

                <StaticImage
                  className="h-56 w-full object-cover"
                  src="../images/education/library-kyiv-mohyla-academy.jpg"
                  alt="Kyiv Mohyla Academy"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
