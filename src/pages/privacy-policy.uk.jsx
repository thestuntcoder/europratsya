import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function PrivacyPolicyUk() {
  return (
    <LayoutPage>
      <Helmet>
        <title>Політика конфіденційності | Europratsya</title>
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
                Політика конфіденційності та використання персональних даних
                нашим веб-порталом.
              </h1>
              <div className="prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
                <p>
                  Конфіденційність користувачів нашого веб-сайту має велике
                  значення для нас, і ми докладаємо всіх зусиль для забезпечення
                  її захисту. Дані правила пояснюють, як ми використовуємо вашу
                  персональну інформацію. Погоджуючись із використанням
                  файлів-cookie при першому відвідуванні нашого веб-сайту,
                  відповідно до положень даних Правил, ви надаєте нам дозвіл на
                  використання файлів-cookie при кожному вашому наступному
                  візиті.
                </p>
                <p className="font-bold">
                  Якщо ви залишаєте інформацію, коли телефонуєте нам або
                  відвідуєте наш веб-сайт чи канали в соціальних мережах згідно
                  з Europratsy CIC, ось що відбувається з вашими даними:
                </p>
                <ul>
                  <li>
                    Ми можемо збирати та зберігати Вашу контактну інформацію,
                    зокрема - адресу електронної пошти та інші дані.
                  </li>
                  <li>Ми ведемо внутрішній облік наявних контактів.</li>
                  <li>
                    Ми можемо використовувати цю інформацію для покращення
                    нашого веб-порталу.
                  </li>
                  <li>
                    Ми також можемо зв’язатися з вами електронною поштою,
                    телефоном або поштою з метою проведення опитування чи
                    дослідження для покращення роботи нашого веб-порталу.
                  </li>
                  <li>
                    Ми можемо використовувати цю інформацію, щоб налаштувати
                    веб-сайт відповідно до ваших потреб, запитів чи інтересів.
                  </li>
                  <li>
                    Ми запровадили жорсткі фізичні, електронні та управлінські
                    процедури для захисту інформації, яку ми збираємо в
                    Інтернеті.
                  </li>
                </ul>

                <p>
                  Наш веб-сайт містить посилання на інші веб-сайти, але такі
                  сайти не регулюються цими правилами про захист персональних
                  даних та конфіденційність.
                </p>
                <p>
                  Якщо ви раніше погодилися надати доступ до Вашої особистої
                  інформації для прямого маркетингу, Ви можете змінити свою
                  думку в будь-який час – контактні дані наведені нижче.
                </p>
                <p>
                  Ви можете запитати деталі особистої інформації, яку ми
                  зберігаємо про Вас відповідно до законів про конфіденційність
                  цього домену. Якщо ви бажаєте отримати копію інформації про
                  Вас, будь ласка, напишіть на info@europratsy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}