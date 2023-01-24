import { flexOrGridBoxItemClassName } from '@/helpers/systemPropsHelper'
import { FlexOrGridBoxItemSystemProps } from '@/types'

describe('Test method flexOrGridBoxItemClassName', () => {
  test.each([
    {
      props: {
        align: {
          xs: 'start',
          md: 'center',
        },
      } as FlexOrGridBoxItemSystemProps,
      expected: 'self-start@xs self-center@md',
    },
  ])('return flex or grid box item class name $expected', ({ props, expected }) => {
    expect(flexOrGridBoxItemClassName(props)).toEqual(expected)
  })
})
