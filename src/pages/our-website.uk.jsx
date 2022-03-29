import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

export default function OurWebsiteUk() {
  return (
    <LayoutPage lang="uk">
      <Helmet>
        <title>Our website | Europratsya</title>
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
                Цей вебсайт
              </h1>
              <div className="prose-indigo prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Цей вебсайт належить і керується Europratsya CIC. Він
                  відповідає правилам конфіденційності які вказані нижче.
                </p>
                <p>
                  Адреса нашої компанії: Europratsya CIC, 32 Oakbank Crescent,
                  Perth PH1 1DF, UK.
                </p>
                <p>
                  Реєстраційний номер нашої компанії – TBC. Наш номер
                  корпоративного податку: BRCT00001440441.
                </p>
                <p>
                  Вміст на цьому вебсайті надається Europratsya CIC який буде
                  оновлюватися регулярно.
                </p>
                <p>
                  Через наші сторінки ви можете перейти на інші вебсайти, які
                  непідконтрольні Europratsya CIC і на які наші правила
                  конфіденційності не поширюється.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
