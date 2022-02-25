import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <div className="bg-gray-900 font-sans text-gray-900 antialiased">
      <div className="mx-auto max-w-screen-xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base leading-6 text-gray-400 md:order-1 md:mt-0">
            © 2022 — All rights reserved. /{' '}
            <a href="mailto:info@europratsya.com">info@europratsya.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
