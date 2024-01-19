import { classNamesWithModifiers } from '@/helpers/systemPropsHelper';
import type { FlexOrGridItemSystemProps } from '@/types';
import type { AlignSelfType, MediaQueryType } from '@/types';

export const flexOrGridItemSystemClassName = <TProps extends FlexOrGridItemSystemProps>(props: TProps): string =>
  classNamesWithModifiers<MediaQueryType, AlignSelfType>({
    propValue: props.alignSelf,
    className: 'self',
  }).join(' ');
