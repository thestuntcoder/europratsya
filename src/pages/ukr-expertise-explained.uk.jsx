import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';

export default function UkrExpertiseExplainedUk() {
  const metaDescription =
    'Ознайомлення з найсильнішими галузями виробництва та науки в економіці України.';
  const metaTitle =
    'Українські галузі виробництва FAQ (запитання та відповіді)';

  return (
    <LayoutPage lang="uk">
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
                Запитання та відповіді про Україну
              </h1>
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Розкажіть нам про українських спеціалістів в IT, програмного
                  забезпечення та веб-дизайну?
                </h2>
                <p>
                  В Україні понад 166 000 розробників програмного забезпечення,
                  яка поряд з Польщею, є провідним європейським постачальником
                  світового технологічного досвіду. Понад 55% працівників
                  (середнього та вищого рівня досвіду) вільно володіють
                  англійською мовою.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Наскільки розвинена їх аерокосмічна наука та техніка?
                </h2>
                <p>
                  Україна входить до дев’яти країн з повним циклом розробки та
                  виробництва аерокосмічної техніки. Окрім проектування та
                  виробництва пасажирських та транспортних літаків, Україна
                  також може похвалитися мережею авіаремонтних підприємств, у
                  тому числі компаній що займаються відновленням військових
                  літаків та гелікоптерів.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Розкажіть нам про природні ресурси?
                </h2>
                <p>
                  Маючи 5% світових запасів корисних копалин, Україна має
                  розвинуту гірничодобувну промисловість. Країна експортує
                  паливний кокс, добрива та сірчану кислоту по всьому світу, а
                  також видобуває залізні, марганцеві руди, титан та алюміній.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Чому медичні університети України відомі у всьому світі?
                </h2>
                <p>
                  Україна десятиліттями залучає іноземних студентів до своїх
                  медичних університетів. Інтерес до якісної, але недорогої
                  медичної освіти, зробив Україну популярною у англомовних
                  африканських країнах, таких як Нігерія та Гана, де Україна є
                  третім за популярністю місцем навчання у світі. Завдяки
                  історично інженерно-технологічним можливостям в Україні,
                  країна знаходиться перевідною в інноваційних діагностичних та
                  лікувальних методах. Програмне забезпечення GlobalLink
                  обслуговує понад 20 мільйонів пацієнтів у 70 країнах світу та
                  налічує 5000 українських інженерів.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Розкажіть нам про автомобільну промисловість?
                </h2>
                <p>
                  В Україні є 12 виробників які виготовляють автобуси, трактори,
                  вантажівки, легкові автомобілі, трамваї та залізничні двигуни.
                </p>
                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Україна - житниця світу, один з найбільших виробників та
                  експортерів зерна.
                </h2>
                <p>
                  Україна володіє третиною чорноземів у світі. Вона стоїть на
                  першому місці як експортер соняшникової олії, на другому по
                  ячменю та на третьому по пшениці. Нещодавні інвестиції в
                  екотехнології, для підвищення врожайності та стійкості,
                  створили сільськогосподарські наукові центри.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
