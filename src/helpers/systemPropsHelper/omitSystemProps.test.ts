import { omitSystemProps } from './omitSystemProps';

describe('Test method omitSystemProps', () => {
  test.each([
    {
      parameters: {
        props: {
          m: 'xxs',
          color: 'azure',
          name: 'john',
          disabled: true,
        },
        systemPropNames: ['m', 'color'],
      },
      expected: {
        name: 'john',
        disabled: true,
      },
    },
  ])('omit system props $expected', ({ parameters, expected }) => {
    expect(omitSystemProps(parameters)).toEqual(expected);
  });
});
