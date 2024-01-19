import { flexOrGridSystemClassName } from '@/helpers/systemPropsHelper';
import { FlexOrGridSystemProps } from '@/types';

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
      },
      expected: 'items-center@xs justify-center@xs gap-xs@xs gap-s@md',
    },
  ] as { props: FlexOrGridSystemProps; expected: string }[])(
    'return flex or grid class name $expected',
    ({ props, expected }) => {
      expect(flexOrGridSystemClassName(props)).toEqual(expected);
    }
  );
});
