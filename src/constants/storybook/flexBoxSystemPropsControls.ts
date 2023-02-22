import {
  alignContentCssPropertyNameList,
  alignItemsCssPropertyNameList,
  alignSelfCssPropertyNameList,
  flexBoxSystemProps,
  flexCssPropertyNameList,
  flexDirectionCssPropertyNameList,
  flexWrapCssPropertyNameList,
  justifyContentCssPropertyNameList,
  spacingTokenNameList,
} from '@/constants';
import { createControls } from '@/helpers/storybookHelper';
import { FlexBoxSystemProps } from '@/types/SystemProps';

export const flexBoxSystemPropsControls = createControls<FlexBoxSystemProps>({
  category: 'Flex Box System Props',
  props: flexBoxSystemProps,
  options: {
    alignContent: alignContentCssPropertyNameList,
    alignItems: alignItemsCssPropertyNameList,
    alignSelf: alignSelfCssPropertyNameList,
    flexBasis: flexWrapCssPropertyNameList,
    flex: flexCssPropertyNameList,
    flexDirection: flexDirectionCssPropertyNameList,
    flexWrap: flexWrapCssPropertyNameList,
    gap: spacingTokenNameList,
    gapX: spacingTokenNameList,
    gapY: spacingTokenNameList,
    justifyContent: justifyContentCssPropertyNameList,
  },
});
