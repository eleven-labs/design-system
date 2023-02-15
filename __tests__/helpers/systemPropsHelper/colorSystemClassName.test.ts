import { colorSystemClassName } from '@/helpers/systemPropsHelper';
import { ColorSystemProps } from '@/types';

describe('Test method colorSystemClassName', () => {
  test.each([
    {
      props: {
        bg: 'azure',
        color: 'white',
      },
      expected: 'bg-azure color-white',
    },
  ] as { props: ColorSystemProps; expected: string }[])('return color class name $expected', ({ props, expected }) => {
    expect(colorSystemClassName(props)).toStrictEqual(expected);
  });
});
