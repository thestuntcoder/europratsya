import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.de';

export default function OurWebsiteDe() {
  return (
    <LayoutPage lang="de">
      <Helmet>
        <title>Unsere Website | Europratsya</title>
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
                Unsere Website
              </h1>
              <div className="prose-indigo prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Diese Website ist Eigentum von Europratsya CIC und wird von
                  dieser betrieben. Es gelten die unten aufgeführten
                  Datenschutzrichtlinien.
                </p>
                <p>
                  Unsere Firmenadresse lautet Europratsya CIC, 32 Oakbank
                  Crescent, Perth PH1 1DF, UK.
                </p>
                <p>
                  Der Inhalt dieser Website wird von Europratsya CIC zur
                  Verfügung gestellt, und wir bemühen uns, die Informationen auf
                  dem neuesten Stand und korrekt zu halten.
                </p>
                <p>
                  Über unsere Website können Sie auf andere Websites zugreifen,
                  die nicht unter der Kontrolle von Europratsya CIC stehen und
                  für die unsere Datenschutzbestimmungen nicht gelten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
