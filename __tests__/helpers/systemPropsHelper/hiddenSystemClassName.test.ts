import { hiddenSystemClassName } from '@/helpers/systemPropsHelper';
import { HiddenSystemProps } from '@/types/SystemProps';

describe('Test method hiddenSystemClassName', () => {
  test.each([
    {
      props: {
        hiddenBelow: 'md',
      },
      expected: 'hidden-below@md',
    },
  ] as { props: HiddenSystemProps; expected: string }[])(
    'return hidden class name $expected',
    ({ props, expected }) => {
      expect(hiddenSystemClassName(props)).toEqual(expected);
    }
  );
});
