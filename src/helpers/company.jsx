import * as React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
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

  const getImg = getImage(company.image.asset.gatsbyImageData);

  return (
    <div className="col-span-1 flex justify-center bg-gray-50 px-8 py-8">
      <Link to={'/company/' + company.slug.current}>
        <GatsbyImage
          image={getImg}
          className="max-h-12"
          alt={company.name}
          objectFit="contain"
        />
      </Link>
    </div>
  );
}
