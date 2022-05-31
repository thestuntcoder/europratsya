import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export function employersList(edges, lang = 'en') {
  let output = [];
  for (var key in edges) {
    output.push(employer(edges[key].node, lang));
  }

  return output;
}

function employer(company, lang = 'en') {
  if (company.slug === null) return;

  const { i18n } = useTranslation();
  const language = i18n.language;

  const getImg = getImage(company.image.asset.gatsbyImageData);

  return (
    <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
      <a
        href={
          language !== 'en'
            ? `/${language}/company/${company.slug.current}`
            : `/company/${company.slug.current}/`
        }
      >
        <GatsbyImage
          image={getImg}
          className="max-h-12"
          alt={company.name}
          objectFit="contain"
        />
      </a>
    </div>
  );
}
