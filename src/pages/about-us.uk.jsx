import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';
import polarImg from '../images/about/vernadsky-polar-research-station.jpg';

export default function AboutUsUk() {
  const metaDescription =
    'Ми маленька європейська команда, яка хоче полегшити пошук українцям безпечної роботи по професії, в той час, як вони чекають стабілізацію ситуації в Україні. ';
  const metaTitle =
    'Благодійна організація яка поєднує українських кандидатів з перевіреними роботодавцями';

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

      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-black font-bold text-3xl tracking-wide">
                Про нас
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
                      alt="Vernadsky polar research station"
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
                      Полярна дослідна станція імені Вернадського. 12
                      українських вчених зимують тут протягом 10 місяців в
                      екстремальних умовах, проводячи широко відомі дослідження
                      зміни клімату.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo text-gray-500 text-lg mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  <strong>«Європраця»</strong> – некомерційний веб-портал, який
                  покликаний полегшити пошук роботи українським кандидатам.
                </p>
                <p>
                  Ми створюємо єдину базу даних для загальноєвропейських
                  вакансій від перевірених роботодавців. Тільки в ЄС розмовляють
                  23 мовами, а сотні тисяч працівників стали переміщеними.
                </p>
                <p>
                  Задумана 24 лютого 2022 року, зареєстрована 25 лютого і
                  запущена онлайн через два тижні, «Євпропраця» швидко розширює
                  спектр своїх послуги.
                </p>
                <p>
                  Ми пропонуємо таку практичну допомогу: переклад CV,
                  профорієнтація та планування роботи онлайн.
                </p>
                <p>
                  «Європраця» відіграє невелику роль у відбудові України,
                  допомагаючи її громадянам отримувати кращі доходи та набути
                  досвіду, перш ніж вони повернуться у вільну Україну.
                </p>
                <p>
                  Немає жодних юридичних зобов’язань щодо найму українських
                  кандидатів. Єдине зобов’язання – реєстрація на «Європраця» щоб
                  команда могла змогу розглянути ваше резюме українською та
                  запросити на співбесіду.
                </p>

                <h2 className="text-base text-black font-bold text-xl tracking-wide">
                  Команда «Європраці»
                </h2>
                <p className="font-bold">Провідний розробник Дејан Јаћимовић</p>
                <p>
                  Сербському хлопцю Деяну було 14 років, коли бомби впали на
                  його країну. Тому він розуміє агонію громадян, що знаходяться
                  під атаками. Ви можете знайти його на GitHub, якщо зацікавлені
                  у співпраці.
                </p>
                <p className="font-bold">Провідний розробник Дејан Јаћимовић</p>
                <p>
                  Сербському хлопцю Деяну було 14 років, коли бомби впали на
                  його країну. Тому він розуміє агонію громадян, що знаходяться
                  під атаками. Ви можете знайти його на GitHub, якщо зацікавлені
                  у співпраці.
                </p>
                <p className="font-bold">Генеральний директор Крістін Муді</p>
                <p>
                  Вона ділиться навичками фінансової та політичної звітності,
                  отриманих від Financial Times Group і CNBC, для дослідників з
                  «Європраці». Крістін стала першою не з Британії (і першою не з
                  Оксбриджу) студенткою, яка почала стажування у Financial
                  Times. Вона як ніхто інший розуміє, як долати бар’єри.
                </p>
                <p>
                  Знайти її можна на Linkedin, якщо ваша компанія хоче
                  розмістити оголошення про вакансію або задонатити на наш
                  веб-портал.
                </p>

                <p className="font-bold">Провідна дизайнерка Беатріс Бермонд</p>
                <p>
                  Її багаторічний досвід UX та графічного дизайну від керування
                  власною компанією веб-дизайну поєднується з більш ніж
                  десятирічною гуманітарною роботою. Беатріс керує благодійною
                  організацією, де курує широким спектром консультаційних послуг
                  і групами самодопомоги для вразливих жінок та чоловіків на
                  північному заході Італії. Беатріс знає на власному досвіді, що
                  підтримка повинна бути адресною аби це дійсно мало результат.
                </p>
                <p>
                  Ми працюємо разом із групою українських помічниць з Чернівців,
                  Катовіце, Гронінгена та Абердин. Разом з Анастасією, Соломією,
                  Доротою, Марією та Катериною створюємо єдину україномовну базу
                  даних, щоб спростити пошук роботи для тих, кому зараз
                  надзвичайно важко.
                </p>

                <h3 className="text-base text-black font-bold text-xl tracking-wide">
                  Зв’язатися з нами
                </h3>
                <p>
                  Наша команда дослідників володіє українською, російською,
                  румунською, словацькою, польською, а також німецькою,
                  англійською, італійською, французькою та норвезькою мовами.
                  Пишіть нам на{' '}
                  <a href="mailto:info@europratsya.com">info@europratsya.com</a>
                  , і ми швидко відповімо, аби підтримати вас у кар’єрному
                  просуванні на довгостроковий чи короткотривалий період.
                </p>
                <p>
                  Ми особливо налаштовані на пошук роботи для тих, хто все ще
                  проживає в Україні.
                </p>
                <p>
                  Зверніть увагу на пропоновані нами вакансії, де зможете
                  працювати дистанційно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
