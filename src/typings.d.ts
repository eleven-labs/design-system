declare module 'html-parse-stringify' {
  /* eslint-disable-next-line unicorn/no-static-only-class */
  export default class HTMLParseStringify {
    /* eslint-disable-next-line no-unused-vars */
    static parse<T = Record<string, unknown>>(html: string): T;
  }
}

// Missing from @types/react-syntax-highlighter, which does not list every prism grammar.
declare module 'react-syntax-highlighter/dist/esm/languages/prism/csv' {
  const language: unknown;
  export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/mermaid' {
  const language: unknown;
  export default language;
}

declare module 'react-syntax-highlighter/dist/esm/languages/prism/uri' {
  const language: unknown;
  export default language;
}
