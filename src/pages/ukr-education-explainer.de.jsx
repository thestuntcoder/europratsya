import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';

export default function UkrEducationExplainerDe() {
  const metaDescription =
    'Eine Einführung in das ukrainische Bildungssystem für Arbeitgeber, die Lebensläufe von Bewerbern mit ukrainischen Universitäts-, Hochschul- oder Sekundarschulabschlüssen prüfen.';
  const metaTitle = 'Bildung in der Ukraine FAQ';

  return (
    <LayoutPage lang="de">
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
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/education/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-black font-bold text-3xl tracking-wide">
                Bildung in der Ukraine FAQ
              </h1>

              <div className="relative text-base float-right max-w-md">
                <figure>
                  <div className="max-w-md aspect-w-12 ml-8">
                    <StaticImage
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="../images/education/assembly-hall-kyiv-polytechnic-institute.jpg"
                      alt="Assembly hall Kyiv Polytechnic Institute"
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
                      Bilder von oben: Igor Sikorsky Polytechnisches Institut
                      Kiew, Nationale Medizinische Universität Charkiw, Lakshya
                      MBBS (Medizinische Hochschule), Nationale Pädagogische
                      Universität Hluchiw, Aula der Nationalen Technischen
                      Universität der Ukraine, Polytechnisches Institut Kiew und
                      (unten) Forschungsbibliothek der Nationalen Universität
                      Kiew-Mohyla-Akademie.
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="prose prose-indigo text-gray-500 text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p className="mt-24">
                  Die Ukraine hat eine Alphabetisierungsquote von 99,4 % und
                  damit die höchste der Welt. In unserer Broschüre finden Sie
                  einen kurzen Überblick über das hochrangige Bildungssystem des
                  Landes.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Welche sind die besten Universitäten in der Ukraine?
                </h2>
                <p>
                  Nationale Taras-Schewtschenko-Universität Kiew Nationale
                  Iwan-Franko-Universität Lwiw Nationale V. N.
                  Karazin-Universität Charkiw.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Wie ist das Benotungssystem an ukrainischen Universitäten?
                </h2>
                <p>
                  Die Abschlüsse werden entweder auf einer
                  <br />
                  100-Punkte-Skala (90-100 = ausgezeichnet, 70-89 = gut, 50-69 =
                  befriedigend, 0-49 = unbefriedigend)
                </p>
                <p>oder einer</p>
                <p>
                  nationalen 5-Punkte-Skala (5 = ausgezeichnet, 4 = gut, 3 =
                  befriedigend, 2-1 = unbefriedigend)
                  <br />
                  Jüngere Hochschulabsolventen verwenden die Europäische Skala
                  zur Anrechnung und Akkumulierung von Studienleistungen. Die
                  Umrechnung erfolgt für zweijährige und vierjährige Abschlüsse
                  unterschiedlich, siehe folgende Tabelle
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  ECTS Grading scale
                </h2>

                <table className="table-fixed border-collapse text-sm border border-slate-200 max-w-md">
                  <thead>
                    <tr>
                      <th className="border-b font-medium bg-gray-200 p-4 pl-8 pt-0 pb-3 text-slate-400 text-center">
                        NOTE
                      </th>
                      <th className="border-b font-medium bg-gray-200 p-4 pt-0 pb-3 text-slate-400 text-center">
                        WES Umrechnung 2-J Abschluss
                      </th>
                      <th className="border-b font-medium bg-gray-200 p-4 pr-8 pt-0 pb-3 text-slate-400 text-center">
                        WES Umrechnung 4-J Abschluss
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="text-center">A</td>
                      <td className="text-center">A</td>
                      <td className="text-center">A</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center">B</td>
                      <td className="text-center">B+</td>
                      <td className="text-center">A</td>
                    </tr>
                    <tr>
                      <td className="text-center">C</td>
                      <td className="text-center">B</td>
                      <td className="text-center">B+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center">D</td>
                      <td className="text-center">C+</td>
                      <td className="text-center">B</td>
                    </tr>
                    <tr>
                      <td className="text-center">E</td>
                      <td className="text-center">C</td>
                      <td className="text-center">B</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="text-center">F</td>
                      <td className="text-center">F</td>
                      <td className="text-center">F</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3" className="text-sm border-t text-center">
                        © 2019 World Education Services (wenr.wes.org)
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Was bedeuten die Abschlüsse?
                </h2>
                <p>
                  <ul>
                    <li>
                      Junior-Bachelor (Molodshyi Bakalavr) - erste Stufe der
                      Hochschulbildung, entspricht 2 Jahren Studium
                    </li>
                    <li>
                      Bachelor (Bakalavr) - höhere Ausbildung, entspricht 4
                      Jahren Studium
                    </li>
                    <li>
                      Master (Magistr) - fortgeschrittene akademische oder
                      berufliche Ausbildung
                    </li>
                    <li>
                      Doktor der Philosophie/Kunst und Doktor der Wissenschaften
                      - die höchste Ausbildungsstufe
                    </li>
                  </ul>
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Einige Bewerber kommen von Hochschulen, andere von Unis -
                  worin besteht der Unterschied?
                </h2>
                <p>
                  Berufsschulen bieten eine Berufsausbildung für Jugendliche ab
                  15 Jahren an, ähnlich wie eine Lehre als Mechaniker,
                  Elektriker oder Koch. Mit einem Berufsabschluss sind Sie
                  berechtigt, sich zusammen mit Schulabgängern, die die vollen
                  12 Schuljahre besucht haben, um einen Studienplatz zu
                  bewerben.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Ich schaue mir die ukrainischen Schulnoten der Oberstufe an -
                  es scheint zwei Benotungssysteme zu geben?
                </h2>
                <p>
                  Die Schulabgänger <strong>nach 2012</strong> werden nach einem
                  12-Punkte-System benotet:
                  <ul>
                    <li>10-12 (ausgezeichnet, entspricht A),</li>
                    <li>7-9 (gut, entspricht B),</li>
                    <li>4-6 (befriedigend, entspricht C) und</li>
                    <li>1-3 (nicht zufriedenstellend, entspricht F)</li>
                  </ul>
                </p>

                <p>
                  Schulabgänger <strong>vor 2012</strong> wurden nach einem
                  5-Punkte-System eingestuft:
                  <ul>
                    <li>5 (ausgezeichnet),</li>
                    <li>4 (gut),</li>
                    <li>3 (befriedigend)</li>
                    <li>1-2 (nicht zufriedenstellend)</li>
                  </ul>
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Einige Bewerber gingen 11 Jahre zur Schule und andere 12 Jahre
                  - warum?
                </h2>
                <p>
                  In der Ukraine wurde die Schulpflicht 2018 auf 12 Jahre
                  verlängert.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Wie sieht der ukrainische Lehrplan aus?
                </h2>
                <p>
                  Die Schüler werden in 1 oder 2 Fremdsprachen (meist Englisch
                  und Deutsch), Mathematik, Chemie, Physik, Biologie sowie in
                  allen allgemeinen Fächern unterrichtet.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide mt-8">
                  Gibt es etwas, das ich in einem ukrainischen Lebenslauf
                  überprüfen sollte?
                </h2>
                <p>
                  Alle akademischen Einrichtungen in der Ukraine müssen eine
                  Lizenz haben und können ohne Akkreditierung durch das MOES
                  keine Abschlüsse oder Diplome ausstellen.
                </p>

                <StaticImage
                  className="h-56 w-full object-cover"
                  src="../images/education/library-kyiv-mohyla-academy.jpg"
                  alt="Kyiv Mohyla Academy"
                  loading="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
