import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import polarImg from '../images/about/vernadsky-polar-research-station.jpg';

export default function AboutUs() {
  const metaDescription =
    'The story behind the small European team who wanted to make it simpler for Ukrainians to find safe, relevant work while they wait for their country to return to peace.';
  const metaTitle =
    'The charity group matching Ukrainian candidates with safe employers';

  return (
    <LayoutPage>
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
                About us
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
                      Vernadsky polar research station. 12 Ukrainian scientists
                      winter here for 10 months in extreme conditions,
                      delivering widely acclaimed climate change research.{' '}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Europratsya is a nonprofit web portal which facilitates job
                  search for Ukrainian candidates.
                </p>
                <p>
                  We are building one database for pan-European vacancies, from
                  safe, vetted employers. There are 23 languages in the EU
                  alone, and hundreds of thousands of workers have been
                  displaced.
                </p>
                <p>
                  Conceived on the 24th February 2022, incorporated on the 25th
                  February and launched online two weeks later, Europratsya
                  expands its services quickly.
                </p>
                <p>
                  We offer practical assistance: CV translation, career guidance
                  and work planning assets online.
                </p>
                <p>
                  Europratsya plays a small part in the rebuilding of Ukraine by
                  helping its citizens earn a better income and gain expertise
                  before they return to a free Ukraine.
                </p>
                <p>
                  There is no legal commitment to hire Ukrainian candidates -
                  signing up on Europratsya is a commitment to consider
                  Ukrainian CVs and call them for interviews.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  The team behind Europratsya
                </h2>
                <p>
                  Lead developer Dejan Jacimovic – find him on{' '}
                  <a href="https://github.com/dejanjacimovic">GitHub</a> if
                  you’re keen to contribute. Dejan was a 14 year old Serb when
                  the bombs fell on his country. He understands the agony of a
                  population under attack and he brings 23 years of coding
                  experience and digital agency leadership to Europratsya.
                </p>
                <p>
                  MD Kristine Moody – find her on Linkedin if your company wants
                  to support with vacancy ads or funding. She brings financial
                  and political reporting skills from the Financial Times Group
                  and CNBC to the researchers in Europratsya. Kristine was the
                  first non-Brit (and the first non-Oxbridge) student to start
                  as trainee in the Financial Times. She understands about
                  breaking barriers.
                </p>
                <p>
                  Lead designer Beatrice Bermond – her years of UX and graphic
                  design expertise from running her own web design company
                  combines with more than ten years of humanitarian work.
                  Beatrice manages a charity which oversees a range of
                  counselling services and self-help groups for vulnerable women
                  and some men in north west Italy. Beatrice knows first-hand
                  that support needs to be targeted to make a difference.
                </p>
                <p>
                  We work together with a band of Ukrainian sisters based in
                  Chernivtsi, Katowice, Groningen and Aberdeen. Together with
                  Solomiya Smeaton, Dorota Siemienska, Anastasiya Vuico Kateryna
                  Hrytsiuk and Mariia Torianyk we build one Ukrainian language
                  database to make job search simpler for those already under
                  extreme pressure.
                </p>

                <h3 className="text-base text-xl font-bold tracking-wide text-black">
                  Reach us
                </h3>
                <p>
                  Our team of researchers speak Ukrainian, Russian, Romanian,
                  Slovak, Polish and German as well as English, Italian, French
                  and Norwegian. Reach all of us on{' '}
                  <a href="mailto:info@europratsya.com">info@europratsya.com</a>{' '}
                  and we will answer quickly to support your career moves,
                  whether it’s for the short term or long term.
                </p>
                <p>
                  We are particularly keen to create work for those still based
                  in Ukraine – look out for our remote or hybrid remote
                  positions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
