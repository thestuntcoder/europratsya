import * as React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import Navigation from './layout/navigation';

import ukrBg from '../images/ukr-background-new.jpg';
import ukrUniBg from '../images/ukr-universities.jpg';

import sponsorKaffebakeriet from '../images/sponsors/kaffebakeriet.jpeg';
import sponsorKodit from '../images/sponsors/kodit.png';
import sponsorSC from '../images/sponsors/stuntcoders.png';
import sponsorDT from '../images/sponsors/daytwo.svg';
import sponsorGrieg from '../images/sponsors/grieg.svg';
import sponsorTM from '../images/sponsors/tm.png';
import sponsorBlum from '../images/sponsors/blum.webp';
import sponsorAreas from '../images/sponsors/areas.webp';

import magnifyingGlass from '../images/index/vacancies.svg';
import trainIcon from '../images/index/move.svg';
import calculator from '../images/index/calculator.svg';
import cv from '../images/index/cv-help.svg';

export default function HomepageUkranian({ language }) {
  return (
    <main>
      <div className="relative">
        <Navigation lang={language} />

        <div className="relative bg-gray-800 pb-32">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={ukrBg}
              alt="We welcome Ukrainians to European Union."
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              Усе, що необхідно для успішного робочого переїзду
            </h1>
          </div>
        </div>

        <section
          className="relative z-10 mx-auto -mt-32 2xl:max-w-[75%] xl:max-w-[95%] px-4 pb-4 sm:px-6 lg:px-8 mb-24"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-10 2xl:grid-cols-4  xl:grid-cols-2 xl:gap-y-2 md:grid-cols-2 md:gap-y-2 md:gap-x-2 lg:gap-x-2">
            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={magnifyingGlass}
                alt="Icon of Magnifying Glass"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Шукаєте
                <br /> роботу?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                <span className="font-extrabold text-[#D6D648] ">
                  OУ нашій базі вакансій можна знайти роботу
                </span>{' '}
                для тих, хто говорить лише українською та російською і для
                кандидатів із базовими знаннями англійської, французької чи
                німецької. Ми співпрацюємо з європейськими роботодавцями, які
                охоче допомагають українцям, що були змушені виїхати за кордон.
              </p>
              <Link
                to="/vacancies"
                className="w-10/12 mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Вакансії
              </Link>
            </div>

            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={trainIcon}
                alt="Icon of a train"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Плануєте
                <br /> переїхати за <br /> кордон?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                <span className="font-extrabold text-[#D6D648] ">
                  У нас зібрана інформація щодо працевлаштування
                </span>{' '}
                українців у країнах Європи. Тут можна дізнатисяу, де потрібен
                ваш досвід, як отримати робочу візу, а також як отримати
                акредитацію вашого рівня кваліфікації. <br />
                <br />
                Уся доступна інформація{' '}
                <span className="font-extrabold text-[#D6D648] ">
                  перевірена на урядових вебсайтах.
                </span>
              </p>
              <Link
                to="/"
                className="mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Корисна інформація
              </Link>
            </div>

            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={calculator}
                alt="Icon of a calculator"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Є питання
                <br />
                щодо
                <br />
                зарплати?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                Тут ви можете перевірити, чи роботодавець пропонує
                <span className="font-extrabold text-[#D6D648] ">
                  справедливу оплату праці.
                </span>{' '}
                <br />
                <br />
                Кожного тижня ми додаємо нові країни та сектори, щоб ви мали
                можливість{' '}
                <span className="font-extrabold text-[#D6D648] ">
                  перевірити чи вам платять відповідно до ринкової ставки.
                </span>
              </p>
              <Link
                to="/"
                className="mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Перевірити рівень ЗП
              </Link>
            </div>

            <div className="w-full px-4 py-8 bg-gray-800 flex flex-col items-center ">
              <img
                src={cv}
                alt="Icon of CV"
                className="w-16 md:w-24 lg:w-36 mb-2"
              />
              <h3 className="text-3xl font-extrabold text-white leading-8 mb-2 text-center">
                Потрібна
                <br /> допомога з <br /> резюме?
              </h3>
              <p className="flex-1 text-white font-bold text-lg leading-5 text-center mt-6">
                <span className="font-extrabold text-[#D6D648] ">
                  Ми перекладаємо CV з української чи російської
                </span>{' '}
                на англійську мову протягом 2-3 днів. Ми також даємо поради щодо
                наповнення та оформлення СV, щоб збільшити ваші шанси попасти на
                співбесіду.
              </p>
              <Link
                to="/"
                className="w-10/12 mt-10 text-center px-5 py-2 rounded-full border border-transparent bg-blue-600 text-xl font-extrabold uppercase text-white hover:bg-blue-300"
              >
                Допомога з CV
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="relative h-3/4 bg-gray-100">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={ukrUniBg}
            alt="Ukrainian universities"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900 opacity-50" />
        <div className="z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="z-10 m-auto mx-auto mt-64 mb-64 text-center align-middle text-3xl px-3 sm:text-4xl font-extrabold text-white">
            <p>
              Кілька лауреатів нобелівської премії в медицині, фізиці, хімії та
              літературі походять з України. Найдавніші університети в Україні
              були відкриті ще у 16-17 століттях та продовжують випускати
              висококласних науковців, інженерів, архітекторів та шахтарів.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-left text-xl font-semibold uppercase tracking-wider text-gray-600">
            Спонсори і партнери
          </p>
          <div className="mt-6 grid grid-cols-3 gap-8 sm:grid-cols-5 lg:mt-8">
            <div className="col-span-1 flex justify-center">
              <img
                className="h-full w-full object-contain"
                width="190"
                height="48"
                src={sponsorBlum}
                alt="Blum"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-full w-full object-contain"
                width="200"
                height="48"
                src={sponsorAreas}
                alt="Areas"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-full w-full object-contain"
                width="304"
                height="48"
                src={sponsorSC}
                alt="StuntCoders"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-full w-full object-contain"
                width="230"
                height="48"
                src={sponsorDT}
                alt="DayTwo"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-full w-full object-contain"
                width="210"
                height="48"
                src={sponsorTM}
                alt="Team Magnus"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
