import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';
import htm from 'htm';
import vhtml from 'vhtml';
import { toHTML, uriLooksSafe } from '@portabletext/to-html';

const html = htm.bind(vhtml);

const serializers = {
  types: {
    image: ({ value }) => '',
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <h1 className="mt-8 text-base text-3xl font-bold tracking-wide text-black">
              {props.children}
            </h1>
          );

        case 'h2':
          return (
            <h2 className="mt-4 text-base text-2xl font-bold tracking-wide text-black">
              {props.children}
            </h2>
          );

        case 'h3':
          return (
            <h3 className="mt-2 text-xl font-bold tracking-wide text-black">
              {props.children}
            </h3>
          );

        case 'h4':
          return (
            <h4 className="mt-2 font-bold tracking-wide text-black">
              {props.children}
            </h4>
          );

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;

        default:
          return <p className="my-4">{props.children}</p>;
      }
    },
    code(props) {
      return (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      );
    },
  },
  list: (props) =>
    props.type === 'bullet' ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    ),
  listItem: (props) => <li className="ml-4 list-disc">{props.children}</li>,
  marks: {
    strong: (props) => <strong>{props.children}</strong>,
    em: (props) => <em>{props.children}</em>,
    link: (props) => {
      let rel,
        blank = '';
      if (
        typeof props.mark.href !== 'undefined' &&
        !props.mark.href.startsWith('/')
      ) {
        rel = 'noreferrer noopener';
        blank = '_blank';
      }

      return (
        <a
          href={props.mark.href}
          rel={rel}
          target={blank}
          className="text-blue-500 hover:underline"
        >
          {props.children}
        </a>
      );
    },
  },
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockContent;
