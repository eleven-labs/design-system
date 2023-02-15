import { flexBoxSystemClassName } from '@/helpers/systemPropsHelper';
import { FlexBoxSystemProps } from '@/types';

describe('Test method flexBoxClassName', () => {
  test.each([
    {
      props: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: {
          xs: 'xs',
          md: 's',
        },
        alignSelf: {
          xs: 'start',
          md: 'center',
        },
      },
      expected: 'items-center@xs justify-center@xs gap-xs@xs gap-s@md self-start@xs self-center@md',
    },
  ] as { props: FlexBoxSystemProps; expected: string }[])(
    'return flex or grid box class name $expected',
    ({ props, expected }) => {
      expect(flexBoxSystemClassName(props)).toEqual(expected);
    }
  );
});
