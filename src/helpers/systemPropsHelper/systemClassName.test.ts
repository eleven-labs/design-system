import type { SystemProps } from '@/types';

import { systemClassName } from './systemClassName';

describe('Test method systemClassName', () => {
  test.each([
    {
      props: {
        color: 'amaranth',
        p: 's',
        m: 'm',
      } as SystemProps,
      expected: 'color-amaranth m-m@xs p-s@xs',
    },
  ])('return system class name $expected', ({ props, expected }) => {
    expect(systemClassName(props)).toEqual(expected);
  });
});
