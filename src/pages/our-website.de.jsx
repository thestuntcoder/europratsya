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
          className="object-cover w-full h-56"
          src="../images/expertise/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 py-16 mx-auto">
          <div className="mt-8">
            <div className="lg:mt-0 mt-8">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Unsere Website
              </h1>
              <div className="prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
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
