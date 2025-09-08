import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// A custom component to handle images// A custom component to handle images
const ImageComponent = ({ src, alt }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img
        src={src}
        alt={alt}
        style={{
          maxHeight: '500px',
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

// A component to handle code blocks
const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const ContentSection = ({ content }) => {
  return (
    <ReactMarkdown
      components={{ ...CodeBlock, img: ImageComponent }}
      className="markdown-class"
    >
      {content}
    </ReactMarkdown>
  );
};

export default ContentSection;