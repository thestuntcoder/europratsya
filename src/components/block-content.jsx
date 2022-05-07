import React from 'react';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';

const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-03-25',
  token: process.env.SANITY_TOKEN,
  useCdn: true,
});

const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <img
      src={urlBuilder(client)
        .image(value)
        .width(800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
};

const serializers = {
  types: {
    image: ({ value }) => <SampleImageComponent value={value} />,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="mt-8 text-base text-3xl font-bold tracking-wide text-black">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-4 text-base text-2xl font-bold tracking-wide text-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-2 text-xl font-bold tracking-wide text-black">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-2 font-bold tracking-wide text-black">{children}</h4>
    ),
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    code: ({ children }) => (
      <pre data-language={children.language}>
        <code>{children.code}</code>
      </pre>
    ),
    p: ({ children }) => <p className="my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4 list-disc">{children}</li>,
    checkmarks: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const BlockContent = (props) => {
  return <PortableText value={props.value} components={serializers} />;
};

export default BlockContent;
