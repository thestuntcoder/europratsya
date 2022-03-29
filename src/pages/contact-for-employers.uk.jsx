import * as React from 'react';
import { Helmet } from 'react-helmet';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center.uk';
import contactImg from '../images/contact/contact-form-employers.jpg';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default function ContactEmployersUk() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => alert('Дякуємо за подання!'))
      .catch((error) => alert(error));
  };

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
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="absolute left-3/4 top-0 bottom-0 hidden w-screen bg-gray-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-base text-3xl font-bold tracking-wide text-black">
                Допомога з полегшенням пошуку роботи для українців
              </h2>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="relative mx-auto max-w-prose text-base italic lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={contactImg}
                      alt="Košice in Slovakia"
                      width="1184"
                      height="1376"
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
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
                      Центральний діловий район Кошице в Словаччині, який
                      пропонує поєднання технологій, виробництва та логістики.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose-blue prose mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
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
                  enctype="multipart-form/data"
                  data-netlify="true"
                  className="grid grid-cols-1 gap-y-6"
                  onSubmit={handleSubmit}
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
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Повне ім'я"
                        onChange={handleChange}
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
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="електронна@пошта"
                        onChange={handleChange}
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
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="CEO, HR"
                        onChange={handleChange}
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
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Назва компанії"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Веб-сайт
                      </label>
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="www.europratsya.com"
                        onChange={handleChange}
                      />
                    </div>
                    <div></div>
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
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="англійська"
                        onChange={handleChange}
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
                        className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="німецький"
                        onChange={handleChange}
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
                      className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Message"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
