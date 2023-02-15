import { systemClassName } from '@/helpers/systemPropsHelper';
import type { SystemProps } from '@/types';

describe('Test method systemClassName', () => {
  test.each([
    {
      props: {
        display: 'flex',
        flexDirection: 'column-reverse',
        width: 'full',
        color: 'amaranth',
        p: {
          xs: 's',
          md: 'm',
        },
        m: 'm',
        textAlign: 'center',
      },
      expected:
        'color-amaranth flex-column-reverse@xs display-flex@xs width-full@xs p-s@xs p-m@md m-m@xs text-center@xs',
    },
  ] as { props: SystemProps; expected: string }[])('return system class name $expected', ({ props, expected }) => {
    expect(systemClassName(props)).toEqual(expected);
  });
});
