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
                Поради з навчання в університеті
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
                      Антарктична станція Академік Вернадський. 12 українських
                      науковців зимують тут протягом 10-ти місяців в
                      екстремальних умовах, проводячи широко відоме дослідження
                      змін клімату.
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
                      Учні з будь-якої точки світу можуть записатися на обраний
                      курс та вчитися безкоштовно або також отримати сертифікат
                      про проходження курсу за невелику оплату.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Українські університети приймають рішення щодо навчання
                  автономно, залежно від їхньої ситуації.
                </p>
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Допоміжні ресурси українською.
                </h2>
                <p>
                  Безкоштовні онлайн курси з сертифікатами можна знайти{` `}
                  <a
                    className="blue-500 hover:underline"
                    href="http://prometheus.org.ua/"
                  >
                    тут
                  </a>{' '}
                  і{' '}
                  <a
                    className="blue-500 hover:underline"
                    href="https://vumonline.ua/"
                  >
                    тут
                  </a>
                  .
                </p>
                <p>
                  Перелічені мовні курси безкоштовні для українців:{' '}
                  <a
                    className="blue-500 hover:underline"
                    href="http://busuu.com/ru/c/ukraina-navchaisya-bezkoshtovnonians/"
                  >
                    Mondly, трьохмісячні курси з 13-ти мов
                  </a>
                  та{' '}
                  <a
                    className="blue-500 hover:underline"
                    href="http://busuu.com/ru/c/ukraina-navchaisya-bezkoshtovnonians/"
                  >
                    Busuu
                  </a>
                  .
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Допоміжні ресурси англійською.
                </h2>
                <p>
                  Безкоштовні курси з багатьох предметів у галузі STEM пропонує
                  платформа MITу{' '}
                  <a
                    className="blue-500 hover:underline"
                    href="https://ocw.mit.edu/"
                  >
                    OpenCourseWare
                  </a>
                  . В онлайн доступі є матеріали більше ніж з 2500 курсів MIT,
                  які допоможуть підготуватися до екзамену в обраній сфері.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Недорога міжнародна акредитація/сертифікація.
                </h2>
                <p>
                  Одні з найкращих доступних онлайн можливостей надаються MIT,
                  США. Вони пропонують дві платформи{' '}
                  <a
                    className="blue-500 hover:underline"
                    href="https://www.edx.org/"
                  >
                    edX
                  </a>{' '}
                  and{' '}
                  <a
                    className="blue-500 hover:underline"
                    href="https://mitxonline.mit.edu/"
                  >
                    MITx Online
                  </a>{' '}
                  зі своїми численними відкритими онлайн курсами. Вони охоплюють
                  як
                  <a
                    className="blue-500 hover:underline"
                    href="https://openlearning.mit.edu/mit-students/first-year-stem-classes-mit"
                  >
                    базові курси STEM
                  </a>
                  , так і дослідження гуманітарних та соціальних наук, а також
                  навіть поглиблені курси магістерського рівня, що можуть
                  прискорити отримання ступеня магістра.
                </p>
                <p>
                  <a
                    className="blue-500 hover:underline"
                    href="https://openlearning.mit.edu/courses-programs/mitx-courses-edx"
                  >
                    Курси MITx
                  </a>{' '}
                  сформовані на основі курсів у MIT та охоплюють весь спектр
                  передових університетських програм цього університету.
                </p>
                <p>
                  Учні з будь-якої точки світу можуть записатися на обраний курс
                  та вчитися безкоштовно або також отримати сертифікат про
                  проходження курсу за невелику оплату. Курси MITx дають досвід
                  навчання, що включає вирішення завдань, після яких одразу
                  надається фідбек, форуми для обговорення, відео, навчальна
                  література та інструменти, що поглиблюють вивчення.
                </p>
                <p>
                  Також оцініть Coursera, ще одна компанія, що надає численні
                  безкоштовні онлайн курси. На вибір доступні одноденні курси,
                  що надають сертифікати; недорогі дистанційні програми
                  бакалаврату та магістратури та на 100% безкоштовні курси від
                  найбільш відомих світових університетів. Якщо твій університет
                  подав на програму Coursera for Campus, тобі буде доступна
                  розширена база безкоштовних курсів.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Стипендії:
                </h2>
                <p>
                  Студенти університетів та абітурієнти можуть розглянути
                  можливості для отримання стипендій тут:
                </p>
                <ul>
                  <li>
                    <a
                      className="blue-500 hover:underline"
                      href="https://uglobal.university/"
                    >
                      https://uglobal.university/
                    </a>
                  </li>
                  <li>
                    <a
                      className="blue-500 hover:underline"
                      href="https://support.uastudents.de/"
                    >
                      https://support.uastudents.de/
                    </a>
                  </li>
                  <li>
                    Естонія пропонує{' '}
                    <a
                      className="blue-500 hover:underline"
                      href="https://ut.ee/en/content/bachelors-and-masters-studies-university-tartu"
                    >
                      250 стипендій для бакалаврів
                    </a>
                    .
                  </li>
                  <li>
                    Ознайомтесь з{' '}
                    <a
                      className="blue-500 hover:underline"
                      href="https://www.russellgroup.ac.uk/news/russell-group-universities-response-to-the-invasion-of-ukraine/"
                    >
                      підтримкою
                    </a>
                    , яку пропонують 24 передових університети у Великобританії
                    (відомі як Russell Group) для переміщених студентів
                    українських університетів.
                  </li>
                  <li>
                    Огляд стипендій, що пропонують європейські країни:
                    <a
                      className="blue-500 hover:underline"
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
