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
      <div className="mx-auto mt-4 hidden bg-gray-100 px-4 md:block sm:px-6 lg:mt-4">
        <nav className="sm:h-18 relative hidden mx-auto md:flex max-w-screen-xl justify-left md:justify-left">
          <div class="p-2 lg:p-4 flex items-center justify-center">
            <div class="group relative">
              <button class="flex items-center h-10 text-sm lg:text-base rounded px-0 font-semibold text-gray-600 hover:text-black ">
                <p>Kandidaten</p>
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
                      Freie Stellen
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cv-career-advisory-service"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Kostenlose Lebenslauf- und Karriereberatung
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="p-2 lg:p-4  flex items-center justify-center">
            <div class="group relative">
              <button class="flex items-center text-sm lg:text-base h-10 rounded px-0 font-semibold text-gray-600 hover:text-black ">
                <p>Arbeitgeber</p>
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
                      Geprüfte Euro-Arbeitgeber
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Stellenausschreibung
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ukr-education-explainer/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      UKR Bildung FAQ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="p-2 lg:p-4 flex items-center justify-center">
            <div class="group relative">
              <Link
                to="/fair-pay-calculator"
                class="flex items-center h-10 text-sm lg:text-base rounded px-0 font-semibold text-gray-600 hover:text-black "
              >
                Rechner für fairen Lohn
              </Link>
            </div>
          </div>

          <div class="p-2 lg:p-4  flex items-center justify-center">
            <div class="group relative">
              <button class="flex items-center text-sm lg:text-base h-10 rounded px-0 font-semibold text-gray-600 hover:text-black ">
                <p>Zentrum für Karriereförderung</p>
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
                      to="/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Leitfaden für Akkreditierung
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/guide-for-visa-permits/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Leitfaden für Arbeitsvisa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/free-education-university"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Leitfaden für kostenlose Bildung (Universität)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/free-education-high-school"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Leitfaden für den kostenlosen Schulbesuch (Oberschule)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/skills-in-demand/"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Gefragte berufliche Qualifikationen
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career-tools"
                      class="block px-4 py-2 hover:bg-gray-100"
                      activeClassName="block px-4 py-2 hover:bg-gray-100"
                    >
                      Kostenlose Karriere-Tools
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="p-2 lg:p-4  flex items-center justify-center">
            <div class="group relative">
              <Link
                to="/about-us/"
                class="flex items-center text-sm lg:text-base h-10 rounded px-0 font-semibold text-gray-600 hover:text-black "
              >
                Über uns
              </Link>
            </div>
          </div>

          <div className="hidden h-full p-2 lg:block lg:w-40 ml-auto">
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
          <div className="hidden h-full px-2 py-4 md:flex md:items-center md:w-30 ml-auto lg:hidden">
            <div className="flex items-center gap-1 h-10 text-right text-sm font-bold">
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
                <p>Kandidaten</p>
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
                  Freie Stellen
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/cv-career-advisory-service"
                >
                  Kostenlose Lebenslauf- und Karriereberatung
                </Link>
              </div>
              <button
                className="mt-1 flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out  hover:text-gray-900  focus:text-gray-900 focus:outline-none"
                onClick={showSubMenu}
              >
                <p>Arbeitgeber </p>
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
                  Geprüfte Euro-Arbeitgeber
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/"
                >
                  Stellenausschreibung
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/ukr-education-explainer/"
                >
                  UKR Bildung FAQ
                </Link>
              </div>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/fair-pay-calculator"
              >
                Rechner für gerechten Lohn
              </Link>
              <button
                className="mt-1 flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out  hover:text-gray-900  focus:text-gray-900 focus:outline-none"
                onClick={showSubMenu}
              >
                <p>Zentrum für Berufsberatung</p>
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
                  Leitfaden für die Akkreditierung
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/guide-for-visa-permits/"
                >
                  Leitfaden für Arbeitsvisa
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/free-education-university"
                >
                  Leitfaden für kostenlose Bildung (Universität)
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/free-education-high-school"
                >
                  Leitfaden für kostenlose Bildung (Oberschule)
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/skills-in-demand/"
                >
                  Gefragte berufliche Qualifikationen
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-500 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/career-tools"
                >
                  Kostenlose Karriere-Tools
                </Link>
              </div>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/about-us"
              >
                Über uns
              </Link>
            </div>

            <div className="bg-gray-50 flex justify-center gap-2 px-3 py-6 text-center">
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
