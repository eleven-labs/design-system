import { As, PropsOf } from '@/types/SystemProps/ComponentWithAs';

export type AsProps<T extends As = 'div'> = Omit<PropsOf<T>, 'ref' | 'color'> & {
  as?: As;
};
