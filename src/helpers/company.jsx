import * as React from 'react';
import { Link } from 'gatsby';
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

  const link =
    (lang === 'en' ? '' : '/' + lang) + '/company/' + company.slug.current;
  const getImg = getImage(company.image.asset.gatsbyImageData);

  return (
    <div className="bg-gray-50 flex justify-center col-span-1 px-8 py-8">
      <Link to={link}>
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
