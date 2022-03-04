import React from 'react';
import { Link } from 'gatsby';
import europratsyaLogo from '../../images/europratsya-white.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="-mt-4">
                <Link to="/" aria-label="Home">
                  <img
                    className="h-8 w-auto sm:h-12"
                    src={europratsyaLogo}
                    alt="Europratsya logo"
                  />
                </Link>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Languages
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      English 🇬🇧{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/uk"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      Український 🇺🇦{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/de"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      Deutsch 🇩🇪{' '}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link
                      to="/privacy"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      Privacy{' '}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/terms"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      {' '}
                      Terms{' '}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Oranisation
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="text-base text-gray-300 hover:text-white">
                    Europratsya CIC
                    <br />
                    32 Oakbank Crescent
                    <br />
                    UK - Perth PH1 1DF
                  </li>

                  <li className="text-gray-400">
                    <a
                      href="mailto:info@europratsya.com"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      info@europratsya.com
                    </a>
                    <br />
                    BRCT00001440441
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Europratsya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
