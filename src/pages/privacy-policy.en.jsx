import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import kyivAcademy from '../images/education/library-kyiv-mohyla-academy.jpg';

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
          className="object-cover w-full h-56"
          src="../images/expertise/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 py-16 mx-auto">
          <div className="mt-8">
            <div className="lg:mt-0 mt-8">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                What we collect
              </h1>
              <div className="prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
                <p className="font-bold">
                  We may collect the following information:
                </p>
                <ul>
                  <li>name</li>
                  <li>contact information including email address</li>
                  <li>
                    other information relevant to customer surveys and/or offers
                  </li>
                </ul>

                <p>What we do with the information we gather</p>
                <p className="font-bold">
                  We require this information for the following reasons:
                </p>
                <ul>
                  <li>Internal record keeping</li>
                  <li>
                    We may use the information to improve our products and
                    services
                  </li>
                  <li>
                    If you have opted in to our newsletter, we may send
                    promotional emails about new products or offers which we
                    think you may find interesting using the email address which
                    you have provided
                  </li>
                  <li>
                    We may also contact you by email, phone or post for market
                    research purposes. We may use the information to customise
                    the website according to your interests.
                  </li>
                </ul>
              </div>

              <h2 className="mt-12 text-base text-xl font-bold tracking-wide text-black">
                Security
              </h2>
              <div className="prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
                <p>
                  We have put in place strong physical, electronic and
                  managerial procedures to safeguard the information we collect
                  online.
                </p>

                <p className="font-bold">Links to other websites</p>
                <p>
                  Our website contains links to other websites of interest, but
                  such sites are not governed by this privacy statement.
                </p>

                <p className="font-bold">
                  Controlling your personal information
                </p>
                <p>
                  If you have previously agreed to us using your personal
                  information for direct marketing purposes, you may change your
                  mind at any time - contact details below.
                </p>
                <p>
                  You may request details of personal information which we hold
                  about you under this domain’s governing privacy laws. If you
                  would like a copy of the information held on you please write
                  to Europratsya CIC, 32 Oakbank Crescent, UK - Perth PH1 1DF,
                  or emails us at info@europratsya.com.
                </p>

                <p>
                  There are limited circumstances where we may share some of
                  your data with others and they are as follows:
                </p>

                <ol>
                  <li>
                    With agents (including credit reference agencies, credit
                    card clearing agencies, fraud prevention and detection
                    agencies) that we use to process the orders you place with
                    us or who assist us in the service we provide to you. We
                    provide them with only the information they need to perform
                    their function. If our business assets are ever sold to or
                    purchased by another company, Europratsya may disclose your
                    personal information to a purchaser that agrees to abide by
                    the terms and conditions of this privacy policy.
                  </li>
                  <li>
                    We will disclose specific information about you if required
                    to do so by law, governmental request, process or court
                    order or based on our good faith belief that it is necessary
                    to comply.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
