import { default as React, useState } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import Flag from '../../components/flag';
import europratsyaLogo from '../../images/europratsya.svg';

import Search from '../search';
const searchIndices = [{ name: `Home` }];

export default function NavCenter() {
  const [hiddenMobile, setHiddenMobile] = useState(true); // eslint-disable-line
  const [hiddenSubmenu, setHiddenSubmenu] = useState(true); // eslint-disable-line
  const [hiddenDesktop, setHiddenDesktop] = useState(true); // eslint-disable-line

  const { languages, originalPath } = useI18next();

  let hiddenMobileVal =
    'absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50';

  if (hiddenMobile) {
    hiddenMobileVal = 'hidden '.concat(hiddenMobileVal);
  }

  return (
    <div>
      <div className="mx-auto px-3 pt-4 sm:px-5">
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
                this.setState({ hiddenMobile: false });
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
          <Link
            className="order-2 inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:order-1 lg:px-6 lg:py-3 lg:text-sm"
            to="/contact-for-job-seekers/"
          >
            Hilfe beim CV?
          </Link>
          <Search indices={searchIndices} classList="hidden md:flex order-3" />
        </nav>
      </div>
      <div className="mx-auto mt-4 hidden border-t border-b border-gray-500 bg-gray-200 px-4 sm:block sm:px-6 lg:mt-8">
        <nav className="sm:h-18 relative mx-auto flex max-w-screen-xl justify-between overflow-hidden md:justify-center">
          <div className="hidden border-r border-gray-500 p-2 md:block">
            <div className="mb-2 text-sm font-bold">Über</div>
            <div className="md:flex md:space-x-6 lg:space-x-10">
              <Link
                className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                to="/about-us/"
              >
                Über uns
              </Link>
            </div>
          </div>
          <div className="hidden border-r border-gray-500 p-2 md:block">
            <div className="mb-2 text-sm font-bold">Bewerber</div>
            <div className="md:flex md:space-x-6 lg:space-x-10">
              <Link
                className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                to="/skills-in-demand/"
              >
                Gefragte Fähigkeiten
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                to="/guide-for-visa-permits/"
              >
                Leitfaden für Visa / Geneh&shy;migungen
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                to="/companies/"
              >
                Geprüfte EU-Arbeitgeber
              </Link>
              <Link
                className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                to="/essential-checklists/"
              >
                Unverzicht&shy;bare Check&shy;listen
              </Link>
            </div>
          </div>
          <div className="hidden p-2 md:block">
            <div className="mb-2 text-sm font-bold">Arbeitgeber</div>
            <div className="md:flex md:space-x-6 lg:space-x-10">
              <Link
                className="text-sm font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                to="/ukr-education-explainer/"
              >
                UKR Bildungs-FAQ
              </Link>
              <Link
                className="text-sm font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                to="/ukr-expertise-explained/"
              >
                UKR Fach&shy;wissen FAQ
              </Link>
              <Link
                className="break-word text-sm font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                to="/contact-for-employers/"
              >
                Stellenauss&shy;chreibung veröff&shy;entlichen
              </Link>
            </div>
          </div>
          <div className="hidden h-full p-2 lg:w-60  xl:block">
            <div className="mb-2 text-right text-sm font-bold">
              {languages.map((lng) => (
                <div>
                  <Link to={originalPath} language={lng} key={lng}>
                    {lng} <Flag lang={lng} />
                  </Link>{' '}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden h-full p-2 md:block md:w-20  xl:hidden">
            <div className="mb-2 text-right text-sm font-bold">
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
                  onClick={() => this.setState({ hiddenMobile: true })}
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

            <div className="px-2 pt-2 pb-3">
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/about-us/"
              >
                Über uns
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/skills-in-demand/"
              >
                Gefragte Fähigkeiten
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/guide-for-visa-permits/"
              >
                Leitfaden für Visa / Genehmigungen
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/companies/"
              >
                Geprüfte EU-Arbeitgeber
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/essential-checklists/"
              >
                Unverzichtbare Checklisten
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/ukr-education-explainer/"
              >
                UKR Bildungs-FAQ
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/ukr-expertise-explained/"
              >
                UKR Fachwissen FAQ
              </Link>
              <Link
                className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                to="/contact-for-employers/"
              >
                Stellenausschreibung veröffentlichen
              </Link>
            </div>

            <div className="bg-gray-50 px-3 py-6 text-center">
              {languages.map((lng) => (
                <Link
                  to={originalPath}
                  language={lng}
                  key={lng}
                  className="mr-4 block inline"
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
