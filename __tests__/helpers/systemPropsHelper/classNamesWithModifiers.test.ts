import { classNamesWithModifiers } from '@/helpers/systemPropsHelper'
import { MediaQueryType } from '@/types'
import { mediaQueriesList } from '@/constants'

describe('Test method classNamesWithModifiers', () => {
  test.each([
    {
      options: {
        className: 'text',
        modifierList: mediaQueriesList,
        defaultModifier: 'xs',
        propValue: 'center',
      },
      expected: ['text-center@xs'],
    },
    {
      options: {
        className: 'text',
        modifierList: mediaQueriesList,
        defaultModifier: 'xs',
        propValue: {
          xs: 'center',
          md: 'left',
        },
      },
      expected: ['text-center@xs', 'text-left@md'],
    },
  ])('return class names with media queries $expected', ({ options, expected }) => {
    expect(classNamesWithModifiers<MediaQueryType, string | number | boolean>(options)).toEqual(
      expected
    )
  })
})
