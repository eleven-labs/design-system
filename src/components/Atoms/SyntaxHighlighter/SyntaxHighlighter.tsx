import React from 'react';
import type { SyntaxHighlighterProps as SyntaxHighlighterBaseProps } from 'react-syntax-highlighter';
import { Light as SyntaxHighlighterBase } from 'react-syntax-highlighter';
import githubGist from 'react-syntax-highlighter/dist/cjs/styles/hljs/github-gist';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import twig from 'react-syntax-highlighter/dist/esm/languages/hljs/twig';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';

import type { MarginSystemProps } from '@/types';

export type SyntaxHighlighterProps = MarginSystemProps & Pick<SyntaxHighlighterBaseProps, 'language' | 'children'>;

SyntaxHighlighterBase.registerLanguage('sh', shell);
SyntaxHighlighterBase.registerLanguage('shell', shell);
SyntaxHighlighterBase.registerLanguage('bash', bash);
SyntaxHighlighterBase.registerLanguage('json', json);
SyntaxHighlighterBase.registerLanguage('yaml', yaml);
SyntaxHighlighterBase.registerLanguage('yml', yaml);
SyntaxHighlighterBase.registerLanguage('php', php);
SyntaxHighlighterBase.registerLanguage('twig', twig);
SyntaxHighlighterBase.registerLanguage('xml', xml);
SyntaxHighlighterBase.registerLanguage('html', xml);
SyntaxHighlighterBase.registerLanguage('js', js);
SyntaxHighlighterBase.registerLanguage('javascript', js);
SyntaxHighlighterBase.registerLanguage('ts', typescript);
SyntaxHighlighterBase.registerLanguage('typescript', typescript);

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ language, children, ...props }) => (
  <SyntaxHighlighterBase
    {...props}
    language={language}
    style={githubGist}
    customStyle={{
      padding: 'var(--spacing-s)',
      borderRadius: '4px',
    }}
    PreTag="div"
  >
    {children}
  </SyntaxHighlighterBase>
);
