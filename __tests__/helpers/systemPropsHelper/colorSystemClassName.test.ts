import { colorSystemClassName } from '@/helpers/systemPropsHelper';
import { ColorSystemProps } from '@/types';

describe('Test method colorSystemClassName', () => {
  test.each([
    {
      props: {
        bg: 'azure',
        color: 'white',
      } as ColorSystemProps,
      expected: 'bg-azure color-white',
    },
  ])('return color class name $expected', ({ props, expected }) => {
    expect(colorSystemClassName(props)).toStrictEqual(expected);
  });
});
