declare module 'html-parse-stringify' {
  /* eslint-disable-next-line unicorn/no-static-only-class */
  export default class HTMLParseStringify {
    /* eslint-disable-next-line no-unused-vars */
    static parse<T = Record<string, unknown>>(html: string): T;
  }
}
