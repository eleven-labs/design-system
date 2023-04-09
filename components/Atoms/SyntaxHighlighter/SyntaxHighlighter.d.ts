import React from 'react';
import { SyntaxHighlighterProps as SyntaxHighlighterBaseProps } from 'react-syntax-highlighter';
import { MarginSystemProps } from '../../../types';
export type SyntaxHighlighterProps = MarginSystemProps & Pick<SyntaxHighlighterBaseProps, 'language' | 'children'>;
export declare const SyntaxHighlighter: React.FC<SyntaxHighlighterProps>;
