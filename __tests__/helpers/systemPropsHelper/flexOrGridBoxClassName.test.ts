import { FlexOrGridBoxSystemProps } from '@/types'
import { flexOrGridBoxClassName } from '@/helpers/systemPropsHelper'

describe('Test method flexOrGridBoxClassName', () => {
  test.each([
    {
      props: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: {
          xs: 'xs',
          md: 's',
        },
      } as FlexOrGridBoxSystemProps,
      expected: 'items-center@xs justify-center@xs gap-xs@xs gap-s@md',
    },
  ])('return flex or grid box class name $expected', ({ props, expected }) => {
    expect(flexOrGridBoxClassName(props)).toEqual(expected)
  })
})
