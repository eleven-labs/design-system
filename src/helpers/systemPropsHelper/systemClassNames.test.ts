import { systemClassNames } from './systemClassNames';

describe('Test method systemClassNames', () => {
  test.each([
    {
      options: {
        props: {
          p: 'xs',
          mx: {
            xs: 'xs',
            md: 'm',
          },
        },
        systemPropNames: ['p', 'mx'],
        hasResponsiveProps: true,
      },
      expected: ['p-xs@xs', 'mx-xs@xs', 'mx-m@md'],
    },
  ])('return system class names $expected', ({ options, expected }) => {
    expect(systemClassNames(options)).toEqual(expected);
  });
});
