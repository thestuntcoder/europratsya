import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default class NavCenter extends React.Component {
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
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <Link to="/" aria-label="Home">
                  <StaticImage
                    className="h-8 w-auto sm:h-12"
                    src="../images/icon.png"
                    alt="Europratsya logo"
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
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
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/"
              >
                Home
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/work-visas/"
              >
                About us
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/employers/"
              >
                Employers
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/job-postings/"
              >
                Ads
              </Link>
              <Link
                className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
                to="/work-visas/"
              >
                Work visas
              </Link>
            </div>
            <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <span className="inline-flex rounded-md shadow">
                <Link
                  className="focus:shadow-outline-blue inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:border-blue-300 focus:outline-none active:bg-gray-50 active:text-blue-700"
                  to="/contact/"
                >
                  Contact us
                </Link>
              </span>
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
                  <StaticImage
                    className="h-8 w-auto"
                    src="../images/icon.png"
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
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/"
                  role="menuitem"
                >
                  Home
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/about-us/"
                  role="menuitem"
                >
                  About us
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/employers/"
                  role="menuitem"
                >
                  Employers
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/job-ads/"
                  role="menuitem"
                >
                  Ads
                </Link>
                <Link
                  className="mt-1 block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none"
                  to="/work-visas/"
                  role="menuitem"
                >
                  Work visas
                </Link>
              </div>
              <div>
                <Link
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-blue-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:bg-gray-100 focus:text-blue-700 focus:outline-none"
                  to="/contact/"
                  role="menuitem"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}