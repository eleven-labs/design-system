declare module 'html-parse-stringify' {
  /* eslint-disable-next-line unicorn/no-static-only-class */
  export default class HTMLParseStringify {
    /* eslint-disable-next-line no-unused-vars */
    static parse<T = Record<string, unknown>>(html: string): T;
  }
}

declare module 'rollup-plugin-peer-deps-external' {
  import type { Plugin } from 'vite';

  export default function peerDepsExternal(): Plugin;
}
