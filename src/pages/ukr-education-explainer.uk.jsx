import * as React from 'react';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';

export default function UkrEducationExplainerUk() {
  const metaDescription =
    "Роз'яснення української систему освіти для роботодавців, які розглядають резюме від кандидатів з кваліфікацією українського університету, коледжу або середньої школи.";
  const metaTitle = 'Українська кваліфікація FAQ (запитання та відповіді)';

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

      <div className="overflow-hidden bg-white">
        <StaticImage
          className="h-56 w-full object-cover"
          src="../images/education/banner.jpg"
          alt="Banner"
          loading="auto"
        />

        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="mt-8 lg:mt-0">
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                Українська освіта – Запитання та відповіді
              </h1>

              <div className="relative float-right max-w-md text-base">
                <figure>
                  <div className="aspect-w-12 ml-8 max-w-md">
                    <StaticImage
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="../images/education/assembly-hall-kyiv-polytechnic-institute.jpg"
                      alt="Актовий зал Київського політехнічного інституту"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm italic text-gray-500">
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
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
                      Зображення зверху: Київський політехнічний інститут імені
                      Ігоря Сікорського, Харківський національний медичний
                      університет, Лакшя МББС (медичне училище), Глухівський
                      національний педагогічний університет, актова зала
                      Київського політехнічного інституту Національного
                      технічного університету України та (внизу)
                      науково-дослідна бібліотека Національного університету ім.
                      Києво-Могилянської академії.
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p className="mt-24">
                  В Україні рівень грамотності досягає 99,4%, який є найвищим у
                  світі. Зверніться до нашого пояснювача, щоб отримати короткий
                  посібник з системи освіти.
                </p>

                <h2 className="text-base text-xl font-bold tracking-wide text-black">
                  Яка система оцінювання в українських університетах?
                </h2>
                <p>Рівень освіти оприділяється за</p>
                <p>
                  Шкалою 100 балів (90-100 = відмінно, 70-89 = добре, 50-69 =
                  задовільно, 0-49 = незадовільно)
                </p>
                <p>Або</p>
                <p>
                  5-бальна національна шкала (5 = відмінно, 4 = добре, 3 =
                  задовільно, 2-1 = незадовільно)
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  ECTS Grading scale
                </h2>

                <p>
                  В данний момент, вищі освітні заклади, використовують
                  Європейську шкалу кредитування ( European Credit Transfer and
                  Accumulation scale). Рівень освіти залежить від кваліфікацій
                  які вказані нижче.
                </p>

                <table className="max-w-md table-fixed border-collapse border border-slate-200 text-sm">
                  <thead>
                    <tr>
                      <th className="border-b bg-gray-200 p-4 pl-8 pt-0 pb-3 text-center font-medium text-slate-400">
                        GRADE
                      </th>
                      <th className="border-b bg-gray-200 p-4 pt-0 pb-3 text-center font-medium text-slate-400">
                        WES UNDERGRADUATE CONVERSION
                      </th>
                      <th className="border-b bg-gray-200 p-4 pr-8 pt-0 pb-3 text-center font-medium text-slate-400">
                        WES GRADUATE CONVERSION
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
                      <td colspan="3" className="border-t text-center text-sm">
                        © 2019 World Education Services (wenr.wes.org)
                      </td>
                    </tr>
                  </tfoot>
                </table>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Які університети самі популярні в Україні?
                </h2>
                <p>
                  <ul>
                    <li>
                      Київський національний університет імені Тараса Шевченка
                    </li>
                    <li>
                      Львівський національний університет імені Івана Франка
                    </li>
                    <li>
                      Харківський національний університет імені В. Н. Каразіна
                    </li>
                  </ul>
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Яка різниться в кваліфікаціях вказаних нижче?
                </h2>
                <p>
                  <ul>
                    <li>
                      Молодший бакалавр (Молодий Бакалавр) - перший рівень вищої
                      освіти (2 роки навчання)
                    </li>
                    <li>Бакалавр (Бакалавр) - вища освіта (4 роки навчання)</li>
                    <li>
                      Магістр (магістратура) - передова академічна або
                      професійна підготовка
                    </li>
                    <li>
                      Доктор філософії/мистецтва та доктор наук - найвищий
                      рівень освіти
                    </li>
                  </ul>
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Яка різниця між студентами коледжу і університету?
                </h2>
                <p>
                  Коледжі пропонують професійну підготовку, аналогічну навчанню
                  механіків, електриків та шеф-кухарів, для молоді з 15 років.
                  <br />З кваліфікацією коледжу студенти можуть, по бажанню,
                  продовжити навчання в університетах разом із випускниками
                  шкіл, які відвідували повну 12-річну школу.
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Чому акредитації українських середніх шкіл мають дві системи
                  оцінювання?
                </h2>
                <p>
                  Випускники шкіл <strong>після 2012 року</strong> оцінюються за
                  12-бальною системою:
                  <ul>
                    <li>10-12 (відмінно, еквівалентно А),</li>
                    <li>7-9 (добре, еквівалентно B),</li>
                    <li>4-6 (задовільно, еквівалентно C) і</li>
                    <li>1-3 (незадовільно, еквівалентно F)</li>
                  </ul>
                </p>

                <p>
                  Випускники шкіл <strong>до 2012 року</strong> оцінювалися за
                  5-бальною системою:
                  <ul>
                    <li>5 (відмінно),</li>
                    <li>4 (добре),</li>
                    <li>3 (задовільно),</li>
                    <li>2-1 (незадовільно)</li>
                  </ul>
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Чому одні абітурієнти ходили в школу 11 років, а інші 12?
                </h2>
                <p>
                  У 2018 році Україна продовжила обов'язкове навчання до 12
                  років.
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Якою є українська шкільна програма?
                </h2>
                <p>
                  Студенти вивчають 1 або 2 іноземних мов (англійська та
                  німецька є найбільш поширеними), математика, хімія, фізика,
                  біологія, а також всі загальні предмети.
                </p>

                <h2 className="mt-8 text-base text-xl font-bold tracking-wide text-black">
                  Що б ви рекомендували перевірити в українському резюме?
                </h2>
                <p>
                  Всі навчальні заклади в Україні повинні мати ліцензію і не
                  можуть видавати дипломи без акредитації від МОН.
                </p>

                <StaticImage
                  className="h-56 w-full object-cover"
                  src="../images/education/library-kyiv-mohyla-academy.jpg"
                  alt="Києво-Могилянська академія"
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
