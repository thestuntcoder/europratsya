import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';
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

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-black font-bold text-3xl tracking-wide">
                Über uns
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
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
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={polarImg}
                      alt="Die Polarforschungsstation Vernadsky"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500 italic">
                    <svg
                      className="flex-none w-5 h-5 text-gray-400"
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
                      Die Polarforschungsstation Vernadsky. 12 ukrainische
                      Wissenschaftler überwintern hier 10 Monate lang unter
                      extremen Bedingungen und leisten vielbeachtete
                      Forschungsarbeit zum Klimawandel.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo text-gray-500 text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Europratsya.com wurde von einem Team digital Schaffernder aus
                  Serbien, Schottland und Italien entwickelt.
                </p>
                <p>
                  Unsere kleine Gruppe wollte sicherstellen, dass Fähigkeiten
                  und Fachwissen nicht verschwendet werden, wenn ukrainische
                  Familien ein neues Zuhause bauen, sei es vorübergehend oder
                  für die Zukunft.
                </p>
                <p>
                  Wir wollen die Bedürfnisse der europäischen Arbeitgeber mit
                  den Qualifikationen der hochqualifizierten ukrainischen
                  Fachkräfte in Einklang bringen.
                </p>
                <p>
                  Außerdem wollen wir die Recherche und die Arbeitssuche für
                  Menschen, die auf Reisen sind, vereinfachen.
                </p>
                <p>
                  Europratsya CIC wurde im Vereinigten Königreich als
                  gemeinnützige Organisation gegründet, um das Web-Hosting zu
                  finanzieren und die ukrainischen Mitarbeiter zu beschäftigen,
                  die die Übersetzungsdienste erbringen. Freiwillige Mitarbeiter
                  in ganz Europa recherchieren und veröffentlichen aktuelle
                  Informationen zum Arbeitsrecht und zu bestimmungen.
                </p>
                <p>
                  Wenn Sie uns mit Ihrem Fähigkeiten unterstützen möchten,
                  senden Sie bitte eine E-Mail an
                  <a href="mailto:info@europratsya.com">info@europratsya.com</a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
