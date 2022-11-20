import { classNamesWithMediaQueries } from './classNamesWithMediaQueries';

describe('Test method classNamesWithMediaQueries', () => {
  test.each([
    {
      options: {
        propValue: 'center',
        className: 'text',
        withSuffixPropValue: true,
      },
      expected: ['text-center@xs'],
    },
    {
      options: {
        propValue: {
          xs: 'center',
          md: 'left',
        },
        className: 'text',
        withSuffixPropValue: true,
      },
      expected: ['text-center@xs', 'text-left@md'],
    },
  ])('return class names with media queries $expected', ({ options, expected }) => {
    expect(classNamesWithMediaQueries<string | number | boolean>(options)).toEqual(expected);
  });
});
