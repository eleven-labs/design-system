import {
  alignContentList,
  alignItemsList,
  alignSelfList,
  flexBasisList,
  flexDirectionList,
  flexWrapList,
  justifyContentList,
} from '@/constants';

export type FlexDirectionType = typeof flexDirectionList[number];
export type FlexWrapType = typeof flexWrapList[number];
export type JustifyContentType = typeof justifyContentList[number];
export type AlignContentType = typeof alignContentList[number];
export type AlignItemsType = typeof alignItemsList[number];
export type FlexBasisType = typeof flexBasisList[number];
export type AlignSelfType = typeof alignSelfList[number];
