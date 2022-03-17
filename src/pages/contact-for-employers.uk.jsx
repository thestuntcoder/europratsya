import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import contactImg from '../images/contact/contact-form-employers.jpg';

export default function ContactEmployersUk() {
  const metaDescription =
    'Europratsya переведе вашу вакансію на українську мову і безкоштовно розмістить оголошення про вакансію, створюючи одну базу даних для пошуку роботи.';
  const metaTitle = 'Допомога з полегшенням пошуку роботи для українців';

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
        <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 py-16 mx-auto">
          <div className="lg:block bg-gray-50 left-3/4 absolute top-0 bottom-0 hidden w-screen" />
          <div className="max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none mx-auto text-base">
            <div>
              <h2 className="text-base text-3xl font-bold tracking-wide text-black">
                Допомога з полегшенням пошуку роботи для українців
              </h2>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8">
            <div className="lg:row-start-1 lg:col-start-2 relative">
              <div className="max-w-prose lg:max-w-none relative mx-auto text-base italic">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="object-cover object-center rounded-lg shadow-lg"
                      src={contactImg}
                      alt="Košice in Slovakia"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="flex mt-3 text-sm text-gray-500">
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
                      Центральний діловий район Кошице в Словаччині, який
                      пропонує поєднання технологій, виробництва та логістики.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="lg:mt-0 mt-8">
              <div className="prose-blue lg:max-w-none lg:row-start-1 lg:col-start-1 mx-auto text-lg prose text-gray-500">
                <p>
                  Якщо ваша компанія хоче провести співбесіду з українськими
                  кандидатами, ми зробимо це безкоштовно та просто, за допомогою
                  експертного перекладу вашого оголошення про вакансію
                  українською мовою.
                </p>
                <p>
                  Ви допоможете кандидатам шукати в загальноєвропейській базі
                  даних відповідних вакансій їхньою мовою.
                </p>
                <p>
                  Заповніть нашу контактну форму та додайте вимоги до мови
                  вашого робочого місця.
                </p>
                <form
                  name="employer"
                  method="POST"
                  data-netlify="true"
                  className="gap-y-6 grid grid-cols-1"
                >
                  <input type="hidden" name="form-name" value="employer" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Повне ім'я
                      </label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        autocomplete="name"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Електронна пошта
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company-role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ваша роль у компанії
                      </label>
                      <input
                        type="text"
                        name="company-role"
                        id="company-role"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="CEO, HR, etc..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Назва компанії
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Бажана мова
                      </label>
                      <input
                        type="text"
                        name="language-1"
                        id="language-1"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Language 1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="language-2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Також враховуючи
                      </label>
                      <input
                        type="text"
                        name="language-2"
                        id="language-2"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm"
                        placeholder="Language 2"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Коментар
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-3 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Message"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm"
                    >
                      Надіслати
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
