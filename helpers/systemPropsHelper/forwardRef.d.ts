import React from 'react';
import { As, ComponentWithAs, PropsOf, RightJoinProps } from '../../types';
export declare function forwardRef<Props extends object, Component extends As>(component: React.ForwardRefRenderFunction<any, // eslint-disable-line @typescript-eslint/no-explicit-any
// eslint-disable-line @typescript-eslint/no-explicit-any
RightJoinProps<PropsOf<Component>, Props> & {
    as?: As;
}>): ComponentWithAs<Component, Props>;
