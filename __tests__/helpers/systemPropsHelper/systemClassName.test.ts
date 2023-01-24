import type { SystemProps } from '@/types';

import { systemClassName } from '@/helpers/systemPropsHelper';

describe('Test method systemClassName', () => {
  test.each([
    {
      props: {
        color: 'amaranth',
        p: 's',
        m: 'm',
      } as SystemProps,
      expected: 'p-s@xs m-m@xs color-amaranth',
    },
  ])('return system class name $expected', ({ props, expected }) => {
    expect(systemClassName(props)).toEqual(expected);
  });
});
