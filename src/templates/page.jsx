import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LayoutPage from '../components/layout/layout-page';
import NavCenter from '../components/layout/nav-center';
import NavCenterUk from '../components/layout/nav-center.uk';
import NavCenterDe from '../components/layout/nav-center.de';
import BlockContent from '../components/block-content';
import { getRaw, getTitle } from '../helpers/language';

function getSidebar(getImg, description) {
  return (
    <div className="relative lg:col-start-2 lg:row-start-1">
      <svg
        className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
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
      <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
        <figure>
          <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
            <GatsbyImage
              image={getImg}
              className="rounded-lg object-cover object-center shadow-lg"
              alt="sth"
              objectFit="contain"
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
            <span className="ml-2">{description}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default function Page(props) {
  const language = props.pageContext.language;

  let page = props.data.page;
  let sidebar = page.sidebarImage === null;

  let metaTitle = getTitle(page.title, language);
  let metaDescription = getTitle(page.body, language);

  if (sidebar) {
    // let metaImage = page.sidebarImage.asset.gatsbyImageData.images.fallback.src;
  }
  console.log(page.sidebarImage, page.sidebarImage != null);

  const descriptionRaw = getRaw(page.body, language);
  let navigation = {};

  switch (language) {
    case 'de':
      navigation = <NavCenterDe />;
      break;

    case 'uk':
      navigation = <NavCenterUk />;
      break;

    default:
      navigation = <NavCenter />;
  }

  return (
    <LayoutPage>
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <div className="relative">{navigation}</div>

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          {page.sidebarImage != null ? (
            <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
          ) : (
            ''
          )}
          <div
            className={
              'mx-auto max-w-prose text-base lg:max-w-none ' +
                page.sidebarImage !=
              null
                ? 'lg:grid lg:grid-cols-2 lg:gap-8'
                : ''
            }
          >
            <div>
              <h1 className="text-base text-3xl font-bold tracking-wide text-black">
                {getTitle(page.title, language)}
              </h1>
            </div>
          </div>
          <div
            className={
              'mt-8 ' + page.sidebarImage != null
                ? 'lg:grid lg:grid-cols-2 lg:gap-8'
                : ''
            }
          >
            {page.sidebarImage != null
              ? getSidebar(
                  getImage(page.sidebarImage.asset.gatsbyImageData),
                  getTitle(page.footnote, language)
                )
              : ''}
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-indigo mx-auto text-lg text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <BlockContent blocks={descriptionRaw} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      footnote {
        de
        en
        uk
      }
      title {
        de
        en
        uk
      }
      seo {
        description_de
        description_en
        description_uk
        title_de
        title_en
        title_uk
      }
      body {
        _rawDe
        _rawEn
        _rawUk
      }
      sidebarImage {
        asset {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
