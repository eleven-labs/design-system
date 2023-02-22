import * as React from 'react';

import { As, ComponentWithAs, PropsOf, RightJoinProps } from '@/types';

export function forwardRef<Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any, // eslint-disable-line @typescript-eslint/no-explicit-any
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
): ComponentWithAs<Component, Props> {
  return React.forwardRef(component) as unknown as ComponentWithAs<Component, Props>;
}
