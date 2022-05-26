import { default as React, useState } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import Flag from '../../components/flag';
import europratsyaLogo from '../../images/europratsya.svg';

import Search from '../search';
const searchIndices = [{ name: `Home` }];

export default function NavCenter() {
  const [hiddenMobile, setHiddenMobile] = useState(true);

  const { languages, originalPath } = useI18next();

  function showSubMenu(e) {
    let panel = e.currentTarget.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  }

  let hiddenMobileVal =
    'absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50';

  if (hiddenMobile) {
    hiddenMobileVal = 'hidden '.concat(hiddenMobileVal);
  }

  return (
    <div>
      <div className="mx-auto px-3 pt-4 pb-4 sm:px-5 md:pb-0">
        <nav className="relative mx-auto flex max-w-screen-xl items-center justify-between sm:h-10">
          <div className="order-1 flex items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link to="/" aria-label="Home">
                <img
                  className="h-8 w-auto sm:h-12"
                  src={europratsyaLogo}
                  alt="Europratsya logo"
                />
              </Link>
            </div>
          </div>
          <div className="order-3 flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
              id="main-menu"
              type="button"
              aria-label="Main menu"
              aria-haspopup="true"
              onClick={() => {
                setHiddenMobile(false);
              }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <Search indices={searchIndices} classList="hidden md:flex order-3" />
        </nav>
      </div>
      <div className="mx-auto mt-4 hidden bg-gray-100 px-4 sm:px-6 md:block lg:mt-4">
        <nav className="sm:h-18 justify-left md:justify-left relative mx-auto hidden max-w-screen-xl md:flex">
          <div class="flex items-center justify-center p-2 lg:p-4">
            <div class="group relative">
              <button class="flex h-10 items-center rounded px-0 text-sm font-semibold text-gray-600 hover:text-black 2xl:text-base ">
                <p>Кандидатам</p>
                <svg
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <nav
                tabindex="0"
                class="invisible absolute left-0 top-full z-10 w-60 rounded border-2 border-gray-100 bg-white opacity-0 drop-shadow-md transition-all group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100"
              >
                <ul class="py-1">
                  <li>
                    <Link
                      to="/vacancies"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Вакансії
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-for-job-seekers/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Безкоштовний переклад CV та консультування
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="flex items-center  justify-center p-2 lg:p-4">
            <div class="group relative">
              <button class="flex h-10 items-center rounded px-0 text-sm font-semibold text-gray-600 hover:text-black 2xl:text-base ">
                <p>Роботодавцям</p>
                <svg
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <nav
                tabindex="0"
                class="invisible absolute left-0 top-full z-10 w-60 rounded border-2 border-gray-100 bg-white opacity-0 drop-shadow-md transition-all group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100"
              >
                <ul class="py-1">
                  <li>
                    <Link
                      to="/companies"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Перевірені Європейські роботодавці
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-for-employers"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Опублікувати вакансію
                    </Link>
                  </li>
                  <li>
                    <a
                      href={'/uk/ukr-education-explainer/'}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Освіта в Україні
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="flex items-center justify-center p-2 lg:p-4">
            <div class="group relative">
              <a
                href={'/uk/fair-pay-calculator'}
                class="flex h-10 items-center rounded px-0 text-sm font-semibold text-gray-600 hover:text-black 2xl:text-base"
              >
                Калькулятор справедливої оплати праці
              </a>
            </div>
          </div>

          <div class="flex items-center  justify-center p-2 lg:p-4">
            <div class="group relative">
              <button class="flex h-10 items-center rounded px-0 text-sm font-semibold text-gray-600 hover:text-black 2xl:text-base ">
                <p>Центр підтримки з працевлаштування</p>
                <svg
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <nav
                tabindex="0"
                class="invisible absolute left-0 top-full z-20 w-60 rounded border-2 border-gray-100 bg-white opacity-0 drop-shadow-md transition-all group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100"
              >
                <ul class="py-1">
                  <li>
                    <Link
                      to="/skills-in-demand/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Довідник з акредитації
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/guide-for-visa-permits/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Довідник з отримання візи
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/free-education-university"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Довідник з безкоштовної освіти (студентам)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/free-education-high-school"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Довідник з безкоштовної освіти (випускникам)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/skills-in-demand/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Затребуванні робочі навички
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career-tools"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Безкоштовні ресурси для працевлаштування
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="flex items-center  justify-center p-2 lg:p-4">
            <div class="group relative">
              <Link
                to="/about-us/"
                class="flex h-10 items-center rounded px-0 text-sm font-semibold text-gray-600 hover:text-black 2xl:text-base "
              >
                Про нас
              </Link>
            </div>
          </div>

          <div className="lg:w-15 ml-auto hidden h-full p-2 xl:block">
            <div className="mb-0 text-right text-sm font-bold">
              {languages.map((lng) => (
                <div>
                  <Link to={originalPath} language={lng} key={lng}>
                    {lng} <Flag lang={lng} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-30 ml-auto hidden h-full px-2 py-4 md:flex md:items-center xl:hidden">
            <div className="flex h-10 items-center gap-1 text-right text-sm font-bold">
              {languages.map((lng) => (
                <Link to={originalPath} language={lng} key={lng}>
                  <Flag lang={lng} />
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div className={hiddenMobileVal} id="main-mobile-menu">
        <div className="rounded-lg shadow-md">
          <div
            className="shadow-xs overflow-hidden rounded-lg bg-white"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  className="h-8 w-auto"
                  src={europratsyaLogo}
                  alt="Europratsya logo"
                />
              </div>
              <div className="-mr-2">
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                  type="button"
                  aria-label="Close menu"
                  onClick={() => {
                    setHiddenMobile(true);
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <Search
              indices={searchIndices}
              mobile={true}
              classList="order-2 flex justify-end m-2 mr-3 -mb-2"
            />

            <div className="px-2 pt-3 pb-3">
              <button
                className="mt-1 flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out  hover:text-gray-900  focus:text-gray-900 focus:outline-none"
                onClick={showSubMenu}
              >
                <p>Кандидатам</p>
                <svg
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="hidden px-5 pt-2 pb-3">
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/vacancies"
                >
                  Вакансії
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/contact-for-job-seekers/"
                >
                  Безкоштовний переклад CV та консультування
                </Link>
              </div>
              <button
                className="mt-1 flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out  hover:text-gray-900  focus:text-gray-900 focus:outline-none"
                onClick={showSubMenu}
              >
                <p>Роботодавцям </p>
                <svg
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="hidden px-5 pt-2 pb-3">
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/companies"
                >
                  Перевірені Європейські роботодавці
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/contact-for-employers/"
                >
                  Опублікувати вакансію
                </Link>
                <a
                  href={'/uk/ukr-education-explainer/'}
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                >
                  Освіта в Україні
                </a>
              </div>
              <a
                href={'/uk/fair-pay-calculator'}
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
              >
                Калькулятор справедливої оплати праці
              </a>
              <button
                className="mt-1 flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out  hover:text-gray-900  focus:text-gray-900 focus:outline-none"
                onClick={showSubMenu}
              >
                <p>Центр підтримки з працевлаштування</p>
                <svg
                  class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="hidden px-5 pt-2 pb-3">
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/vacancies"
                >
                  Довідник з акредитації
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/guide-for-visa-permits/"
                >
                  Довідник з отримання візи
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/free-education-university"
                >
                  Довідник з безкоштовної освіти (студентам)
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/free-education-high-school"
                >
                  Довідник з безкоштовної освіти (випускникам)
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/skills-in-demand/"
                >
                  Затребуванні робочі навички
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/career-tools"
                >
                  Безкоштовні ресурси для працевлаштування
                </Link>
              </div>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/about-us"
              >
                Про нас
              </Link>
            </div>

            <div className="flex justify-center gap-2 bg-gray-50 px-3 py-6 text-center">
              {languages.map((lng) => (
                <Link
                  to={originalPath}
                  language={lng}
                  key={lng}
                  className="mr-4 flex gap-1"
                >
                  {lng}
                  <Flag lang={lng} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
