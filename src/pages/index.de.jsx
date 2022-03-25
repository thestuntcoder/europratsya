import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import JobAds from '../components/job-ads';

import ukrBg from '../images/ukr-background-new.jpg';
import ukrUniBg from '../images/ukr-universities.jpg';

import sponsorKaffebakeriet from '../images/sponsors/kaffebakeriet.jpeg';
import sponsorKodit from '../images/sponsors/kodit.png';
import sponsorSC from '../images/sponsors/stuntcoders.png';
import sponsorDT from '../images/sponsors/daytwo.svg';
import sponsorGrieg from '../images/sponsors/grieg.svg';
import sponsorTM from '../images/sponsors/tm.png';

export default function Home({ data }) {
  const metaDescription =
    'Our web portal helps job-seekers who need to set up a temporary base for their families outside Ukraine. We also post remote jobs suitable for workers based inside Ukraine. One Ukrainian-language database for skills in demand and vacancies across Europe - free for candidates and free for employers.';
  const metaTitle = 'Non-profit job portal for Ukrainian job-seekers in Europe';

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">
        <NavCenter />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt="We welcome Ukrainians to European Union."
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white text-center drop-shadow-md">
              Unser Portal unterstützt europäische Arbeitgeber bei der Suche
              nach qualifizierten ukrainischen Arbeitskräften.
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-gray-800 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 md:px-8 text-center">
                <h3 className="text-2xl font-extrabold text-white">Bewerber</h3>
                <p className="mt-4 text-base text-white">
                  Bitte sehen Sie sich unseren Leitfaden für Arbeitsvisa und den
                  Leitfaden zum Fachkräftemangel
                  <Link to="/de/skills-in-demand/">Land für Land</Link> an.
                </p>
                <p className="mt-8 text-base text-white">
                  Brauchen Sie Hilfe bei der Übersetzung Ihres Lebenslaufs?
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/de/contact-for-job-seekers/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-full text-base font-medium text-black bg-white hover:bg-gray-200 uppercase"
                    >
                      KONTAKTIEREN SIE UNS
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-blue-500 shadow-xl">
              <div className="relative flex-1 px-6 pt-12 pb-8 md:px-8 text-center">
                <h3 className="text-2xl font-extrabold text-white">
                  Arbeitgeber
                </h3>
                <p className="mt-4 text-base text-white">
                  Um ukrainische Lebensläufe zu bewerten, lesen Sie bitte unsere
                  <Link to="/de/ukr-eduction-explainer/">
                    Erklärungen zur Ausbildung in der Ukraine
                  </Link>
                  und zum
                  <Link to="/de/ukr-expertise-explained/">
                    Fachwissen in der Ukraine
                  </Link>
                  .
                </p>
                <p className="mt-8 text-base text-white">
                  Registrieren Sie sich, um Ihre offenen Stellen zu
                  veröffentlichen
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-full shadow">
                    <Link
                      to="/de/contact-for-employers/"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-full text-base font-medium text-black bg-white hover:bg-gray-200 uppercase"
                    >
                      ANMELDEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              Europratsya stellt Stellen für Kandidaten aus, die einen
              vorübergehenden Wohnsitz für ihre Familien außerhalb der Ukraine
              suchen. Wir veröffentlichen auch Stellenangebote für Arbeitnehmer,
              die in der Ukraine leben.
            </p>
            <p>
              Eine ukrainischsprachige Datenbank für gefragte Qualifikationen
              und freie Stellen in ganz Europa - kostenlos für Bewerber und
              Arbeitgeber.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-yellow-400 sm:text-4xl">
              Neueste Stellenausschreibungen
            </h2>
          </div>
          <JobAds limit="9" lang="de" data={data.allSanityJobPost.edges} />

          <div className="mt-8 text-center">
            <div className="inline-flex rounded-full shadow">
              <Link
                to="/de/vacancies"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-full text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
              >
                Alle offenen Stellen anzeigen
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 relative h-3/4">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={ukrUniBg}
            alt="Ukrainian universities"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-30" />
        <div className="max-w-7xl mx-auto flex items-center justify-between z-10">
          <div className="m-auto text-4xl font-extrabold text-white text-center align-middle mx-auto mt-64 mb-64 z-10">
            Mehrere Nobelpreisträger in Medizin, Physik, Chemie und Literatur
            stammen aus der Ukraine. Die ältesten Universitäten des Landes
            stammen aus dem 16. und 17. Jahrhundert und bringen auch heute noch
            Absolventen von Weltrang in den Bereichen Naturwissenschaften,
            Ingenieurwesen, Landwirtschaft und Bergbau hervor.
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            SPONSOREN UND PARTNER
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src={sponsorKaffebakeriet}
                alt="Kaffebakeriet"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={sponsorKodit} alt="Kodit" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={sponsorGrieg} alt="Grieg" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={sponsorSC} alt="StuntCoders" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={sponsorDT} alt="DayTwo" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src={sponsorTM} alt="Team Magnus" />
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const JOB_POSTS = graphql`
  query JobPosts {
    allSanityJobPost(sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          city
          country {
            title {
              en
              uk
              de
            }
          }
          salary
          contact
          title {
            de
          }
          description {
            de {
              children {
                text
              }
            }
          }
          employer {
            name
          }
          job_categories {
            title
          }
          validUntil
          slug {
            current
          }
        }
      }
    }
  }
`;
