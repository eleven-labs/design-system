import type { TypographySystemProps } from '@/types';

import { typographySystemClassName } from './typographySystemClassName';

describe('Test method typographySystemClassName', () => {
  test.each([
    {
      props: {
        size: 'm',
        textAlign: 'center',
        weight: 'medium',
      } as TypographySystemProps,
      expected: 'text-size-m text-center font-weight-medium',
    },
  ])('return typography class name $expected', ({ props, expected }) => {
    expect(typographySystemClassName(props)).toEqual(expected);
  });
});
