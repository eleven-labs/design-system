import { layoutSystemClassName } from '@/helpers/systemPropsHelper';
import { LayoutSystemProps } from '@/types/SystemProps';

describe('Test method ', () => {
  test.each([
    {
      props: {
        hiddenBelow: 'md',
      },
      expected: 'hidden-below@md',
    },
  ] as { props: LayoutSystemProps; expected: string }[])(
    'return layout class name $expected',
    ({ props, expected }) => {
      expect(layoutSystemClassName(props)).toEqual(expected);
    }
  );
});
