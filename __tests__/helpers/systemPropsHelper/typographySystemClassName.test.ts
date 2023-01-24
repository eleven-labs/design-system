import { typographySystemClassName } from '@/helpers/systemPropsHelper';
import { TypographySystemProps } from '@/types/SystemProps';

describe('Test method typographySystemClassName', () => {
  test.each([
    {
      props: {
        textAlign: 'center',
        weight: 'bold',
      } as TypographySystemProps,
      expected: 'text-center@xs font-weight-bold@xs',
    },
  ])('return typography class name $expected', ({ props, expected }) => {
    expect(typographySystemClassName(props)).toEqual(expected);
  });
});
