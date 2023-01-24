import * as HTMLReactParser from 'html-react-parser';
import { Element, HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import githubGist from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';

import { Reminder, VariantReminderType } from '@/components';

const getVariantReminderByAdmonitionValue = (variantValue: string): undefined | VariantReminderType => {
  switch (variantValue) {
    case 'note':
      return 'note';
    case 'abstract':
    case 'summary':
    case 'tldr':
      return 'summary';
    case 'info':
    case 'todo':
      return 'info';
    case 'tip':
    case 'hint':
    case 'important':
      return 'tip';
    case 'success':
    case 'check':
    case 'done':
      return 'success';
    case 'question':
    case 'help':
    case 'faq':
      return 'question';
    case 'warning':
    case 'caution':
    case 'attention':
      return 'warning';
    case 'failure':
    case 'fail':
    case 'missing':
      return 'failure';
    case 'danger':
    case 'error':
      return 'danger';
    case 'bug':
      return 'bug';
    case 'example':
      return 'example';
    case 'quote':
    case 'cite':
      return 'quote';
  }
};

const getContent = (domNode: HTMLReactParser.DOMNode): string => {
  if (domNode instanceof HTMLReactParser.Element && domNode?.childNodes) {
    return domNode.childNodes.map((domNode) => getContent(domNode)).join();
  }

  return (domNode as HTMLReactParser.Text)?.data || '';
};

export const getReminderByDomNode = (
  domNode: Element,
  htmlReactParserOptions: HTMLReactParserOptions
): React.ReactElement => {
  const variantValue = domNode?.attribs?.class?.replace('admonition', '').trim();
  const variant = getVariantReminderByAdmonitionValue(variantValue);

  const { title, content } = domNode.childNodes.reduce<{
    title: string;
    content: HTMLReactParser.DOMNode[];
  }>(
    (result, childNode) => {
      if (childNode instanceof HTMLReactParser.Element && childNode.attribs?.class?.match('admonition')) {
        result.title = getContent(childNode);
      } else {
        result.content.push(childNode);
      }

      return result;
    },
    { title: '', content: [] }
  );

  return (
    <Reminder my={{ xs: 'm' }} variant={variant as VariantReminderType} title={title}>
      {HTMLReactParser.domToReact(content, htmlReactParserOptions)}
    </Reminder>
  );
};

export const getSyntaxHighlighterByDomNode = (
  domNode: Element,
  htmlReactParserOptions: HTMLReactParserOptions
): React.ReactElement => {
  const domNodeCode = domNode.childNodes.find(
    (childNode) => childNode instanceof HTMLReactParser.Element && childNode.tagName === 'code'
  ) as HTMLReactParser.Element;
  const language = domNodeCode?.attribs?.class?.replace('language-', '');
  return (
    <SyntaxHighlighter
      language={language}
      style={githubGist}
      customStyle={{
        backgroundColor: 'var(--color-grey-ultra-light)',
        padding: 'var(--spacing-s)',
        borderRadius: '4px',
      }}
    >
      {HTMLReactParser.domToReact(domNodeCode.children, htmlReactParserOptions) as unknown as string[]}
    </SyntaxHighlighter>
  );
};
