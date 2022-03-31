import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="text-3xl mt-8">{props.children}</h1>;

        case 'h2':
          return <h2 className="text-3xl mt-4">{props.children}</h2>;

        case 'h3':
          return <h3 className="text-2xl mt-2">{props.children}</h3>;

        case 'h4':
          return <h4 className="text-xl mt-2">{props.children}</h4>;

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
  listItem: (props) => <li className="list-disc ml-4">{props.children}</li>,
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
