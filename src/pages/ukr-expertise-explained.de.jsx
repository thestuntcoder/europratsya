import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';

export default function UkrExpertiseExplainedDe() {
  const metaDescription =
    'Eine Einführung in die stärksten Branchen und Fachgebiete der ukrainischen Wirtschaft.';
  const metaTitle = 'Branchen und Fachgebiete in der Ukraine FAQ';

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

      <div className="overflow-hidden bg-white">
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/expertise/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Branchen und Fachgebiete in der Ukraine FAQ
              </h1>
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Ich habe schon von ukrainischer IT, Software und Webdesign
                  gehört?
                </h2>
                <p>
                  In der Ukraine gibt es über 166.000 Softwareentwickler, die
                  neben Polen zu den führenden europäischen Anbietern von
                  globalem technischem Fachwissen gehören. Insgesamt 55 % der
                  Stellen sind auf mittlerer und höherer Ebene angesiedelt und
                  erfordern fließende Englischkenntnisse.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Wie weit ist die Luft- und Raumfahrttechnik des Landes
                  entwickelt?
                </h2>
                <p>
                  Die Ukraine ist eines von neun Ländern mit einem vollständigen
                  Zyklus der Entwicklung und Produktion von Luft- und
                  Raumfahrthardware. Neben der Entwicklung und Herstellung von
                  Passagier- und Transportflugzeugen verfügt die Ukraine auch
                  über ein Netz von Flugzeugreparaturbetrieben, darunter
                  Unternehmen, die sich mit der Bergung von Militärflugzeugen
                  und Hubschraubern befassen.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Ich weiß über die natürlichen Ressourcen Bescheid - wie steht
                  es mit dem Bergbau?
                </h2>
                <p>
                  Mit 5 % der weltweiten Mineralreserven hat die Ukraine eine
                  hoch entwickelte Bergbauindustrie entwickelt. Das Land
                  exportiert Heizkoks, Düngemittel und Schwefelsäure in die
                  ganze Welt und fördert Eisen, Manganerze, Titan und Aluminium.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Ihre medizinischen Fakultäten sind berühmt - gibt es in der
                  Ukraine auch Biowissenschaften?
                </h2>
                <p>
                  Die Ukraine zieht seit Jahrzehnten internationale Studenten
                  für ihre medizinischen Fakultäten an. Das Interesse an einer
                  hochwertigen und dennoch kostengünstigen medizinischen
                  Ausbildung hat die Ukraine zu einem beliebten Ziel in
                  englischsprachigen afrikanischen Ländern wie Nigeria und Ghana
                  gemacht, wo die Ukraine derzeit das drittbeliebteste
                  Studienziel weltweit ist. Aufgrund der traditionell starken
                  technischen Einrichtungen in der Ukraine steht das Land an der
                  Spitze innovativer diagnostischer und therapeutischer
                  Methoden. GlobalLink Software bedient über 20 Millionen
                  Patienten in 70 Ländern weltweit und beschäftigt 5000
                  ukrainische Ingenieure.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Automobilindustrie - welche Möglichkeiten gibt es?
                </h2>
                <p>
                  Das ukrainische Cluster von 12 Automobilherstellern produziert
                  Busse, Traktoren, Lastwagen, Personenkraftwagen, Straßenbahnen
                  und Eisenbahnmotoren.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Es gibt eine Menge Weizenfelder!
                </h2>
                <p>
                  Die Ukraine liegt auf einem Drittel der reichen Schwarzerde
                  der Welt, was dazu führt, dass sie weltweit die Nummer 1 bei
                  der Ausfuhr von Sonnenblumenöl, die Nummer 2 bei Gerste und
                  die Nummer 3 bei Weizen ist. Jüngste Investitionen in
                  Öko-Technologien zur Steigerung von Erträgen und
                  Nachhaltigkeit haben eine Reihe von landwirtschaftlichen
                  Wissenschaftszentren entstehen lassen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
