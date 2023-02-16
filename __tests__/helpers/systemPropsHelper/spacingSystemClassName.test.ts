import { spacingSystemClassName } from '@/helpers/systemPropsHelper';
import { SpacingSystemProps } from '@/types';

describe('Test method spacingSystemClassName', () => {
  test.each([
    {
      props: {
        p: 'xs',
        m: {
          xs: 's',
          md: 'm',
        },
      },
      expected: 'p-xs@xs m-s@xs m-m@md',
    },
  ] as { props: SpacingSystemProps; expected: string }[])(
    'return system class name $expected',
    ({ props, expected }) => {
      expect(spacingSystemClassName(props)).toEqual(expected);
    }
  );
});
