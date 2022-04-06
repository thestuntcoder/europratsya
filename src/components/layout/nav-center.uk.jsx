import React from 'react';
import { Link } from 'gatsby';
import europratsyaLogo from '../../images/europratsya.svg';

import Search from '../search';
const searchIndices = [{ name: `Home` }];

export default class NavCenterUk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenMobile: true,
      hiddenSubmenu: true,
      hiddenDesktop: true,
    };
  }

  render() {
    let hiddenMobileVal =
      'absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50';

    if (this.state.hiddenMobile) {
      hiddenMobileVal = 'hidden '.concat(hiddenMobileVal);
    }

    return (
      <div>
        <div className="mx-auto px-3 pt-4 sm:px-5">
          <nav className="relative mx-auto flex max-w-screen-xl items-center justify-between sm:h-10">
            <div className="order-1 flex items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/uk/" aria-label="Home">
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
              to="/uk/contact-for-job-seekers/"
            >
              Потрібна допомога з резюме?
            </Link>
            <Search
              indices={searchIndices}
              classList="hidden md:flex order-3"
            />
          </nav>
        </div>
        <div className="mx-auto mt-4 hidden border-t border-b border-gray-500 bg-gray-200 px-4 sm:block sm:px-6 lg:mt-8">
          <nav className="sm:h-18 relative  mx-auto flex max-w-screen-xl justify-between overflow-hidden md:justify-center">
            <div className="hidden border-r border-gray-500 p-2 md:block">
              <div className="mb-2 text-sm font-bold">Про</div>
              <div className="md:flex md:space-x-10">
                <Link
                  className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/uk/about-us/"
                >
                  Про нас
                </Link>
              </div>
            </div>
            <div className="hidden border-r border-gray-500 p-2 md:block">
              <div className="mb-2 text-sm font-bold">Кандидати</div>
              <div className="md:flex md:space-x-10">
                <Link
                  className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/uk/vacancies/"
                >
                  Новітні вакансії 🔔
                </Link>
                <Link
                  className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/uk/guide-for-visa-permits/"
                >
                  Посібник для отримання візи/дозволів
                </Link>
                <Link
                  className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/uk/companies/"
                >
                  Перев&shy;ірені євро&shy;пейські робот&shy;одавці
                </Link>
                <Link
                  className="text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                  to="/uk/essential-checklists/"
                >
                  Kонтро&shy;льні списки
                </Link>
              </div>
            </div>
            <div className="hidden p-2 md:block">
              <div className="mb-2 text-sm font-bold">Роботодавці</div>
              <div className="md:flex md:space-x-10">
                <Link
                  className="text-sm font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                  to="/uk/ukr-education-explainer/"
                >
                  Освіта пояснила
                </Link>
                <Link
                  className="text-sm font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                  to="/uk/ukr-expertise-explained/"
                >
                  Експерт&shy;иза пояснила
                </Link>
                <Link
                  className="text-sm font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-700"
                  to="/uk/contact-for-employers/"
                >
                  Опублік&shy;увати вакансію
                </Link>
              </div>
            </div>
            <div className="hidden h-full p-2 lg:w-60  xl:block">
              <div className="mb-2 text-right text-sm font-bold">
                <Link to="/uk">УК 🇺🇦</Link> | <Link to="/">EN 🇬🇧</Link> |{' '}
                <Link to="/de">DE 🇩🇪</Link>
              </div>
            </div>
            <div className="hidden h-full p-2 md:block md:w-20  xl:hidden">
              <div className="mb-2 text-right text-sm font-bold">
                <Link to="/uk">УК 🇺🇦</Link> <br /> <Link to="/">EN 🇬🇧</Link>
                <br />
                <Link to="/de">DE 🇩🇪</Link>
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
                  to="/uk/about-us/"
                >
                  Про нас
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/vacancies/"
                >
                  Новітні вакансії 🔔
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/guide-for-visa-permits/"
                >
                  Посібник для отримання візи/дозволів
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/companies/"
                >
                  Перевірені європейські роботодавці
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/essential-checklists/"
                >
                  Kонтрольні списки
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/ukr-education-explainer/"
                >
                  Освіта пояснила
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/ukr-expertise-explained/"
                >
                  Експертиза пояснила
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/uk/contact-for-employers/"
                >
                  Опублікувати вакансію
                </Link>
              </div>

              <div className="bg-gray-50 px-3 py-6 text-center">
                <Link to="/uk">УК 🇺🇦</Link>
                {` `}—{` `}
                <Link to="/">EN 🇬🇧</Link>
                {` `}—{` `}
                <Link to="/de">DE 🇩🇪</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
