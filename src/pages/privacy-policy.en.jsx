import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function PrivacyPolicy() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Privacy policy | Europratsya</title>
      </Helmet>

      <div className="relative">
        <NavCenter />
      </div>

      <div className="overflow-hidden bg-white">
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/expertise/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Privacy policy
              </h1>
              <div className="prose-indigo prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  If you leave information when you call us or visit our website
                  or social media channels (clearly run by Europratsy CIC), here
                  is what happens to your data.
                </p>
                <p className="font-bold">
                  We may collect the following information:
                </p>
                <ul>
                  <li>name</li>
                  <li>contact information including email address</li>
                  <li>other information relevant to your sector</li>
                </ul>

                <p>What we do with the information we gather</p>
                <p className="font-bold">
                  We require this information for the following reasons:
                </p>
                <ul>
                  <li>Internal record keeping</li>
                  <li>We may use the information to improve our web portal</li>
                  <li>
                    We may also contact you by email, phone or post for research
                    purposes. We may use the information to customise the
                    website according to your interests.
                  </li>
                </ul>

                <p>
                  We have put in place strong physical, electronic and
                  managerial procedures to safeguard the information we collect
                  online.
                </p>
                <p>
                  Our website contains links to other websites of interest, but
                  such sites are not governed by this privacy statement.
                </p>
                <p>
                  If you have previously agreed to us using your personal
                  information for direct marketing purposes, you may change your
                  mind at any time - contact details below. You may request
                  details of personal information which we hold about you under
                  this domain’s governing privacy laws. If you would like a copy
                  of the information held on you please write to
                  info@europratsy.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
