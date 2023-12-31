import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownProps {
  source: string;
}

export const Markdown = ({ source }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-xl font-semibold text-foreground" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-lg font-medium tracking-wide text-foreground underline underline-offset-4"
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a className="font-normal text-primary" {...props} />
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={atomDark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      className="flex flex-col gap-3"
    >
      {source}
    </ReactMarkdown>
  );
};
