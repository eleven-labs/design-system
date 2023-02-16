import { typographySystemClassName } from '@/helpers/systemPropsHelper';
import { TypographySystemProps } from '@/types/SystemProps';

describe('Test method typographySystemClassName', () => {
  test.each([
    {
      props: {
        textAlign: 'center',
        fontWeight: 'bold',
      },
      expected: 'text-center@xs font-weight-bold',
    },
  ] as { props: TypographySystemProps; expected: string }[])(
    'return typography class name $expected',
    ({ props, expected }) => {
      expect(typographySystemClassName(props)).toEqual(expected);
    }
  );
});
