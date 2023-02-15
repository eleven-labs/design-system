declare module 'html-parse-stringify' {
  export default class HTMLParseStringify {
    static parse<T = Record<string, unknown>>(html: string): T;
  }
}
