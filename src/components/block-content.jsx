import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    block(props) {
      switch (props.children.length) {
        case 3:
          return (
            <p>
              {props.children.map((child, index) => {
                if (index === 1 && child.props.node) {
                  return (
                    <a
                      key={child.key}
                      href={child.props.node.mark.href}
                      className="text-blue-500 hover:underline"
                    >
                      {child.props.node.children[0]}
                    </a>
                  );
                }
                return child;
              })}
            </p>
          );

        // no default
      }

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

        case 'li':
          return <li className="list-disc ml-4">{props.children}</li>;

        default:
          return <p className="my-4">{props.children}</p>;
      }
    },
  },
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockContent;
