import './Button.scss';

import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { PolymorphicProps, SpacingSystemProps } from '../../../types';

type ButtonElementType =
  | keyof Pick<JSX.IntrinsicElements, 'button' | 'a'>
  | React.ForwardRefExoticComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type ButtonProps<C extends ButtonElementType = ButtonElementType> = {
  /**
   * The button variant
   */
  variant?: 'primary' | 'primary-ghost' | 'form';
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SpacingSystemProps;

export const Button = <C extends ButtonElementType = 'button'>({
  as,
  variant,
  children,
  ...nativeProps
}: ButtonProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    as || 'button',
    {
      ...omitSystemProps(nativeProps),
      className: classNames(
        'button',
        { [`button--${variant}`]: variant },
        systemClassName<SpacingSystemProps>(nativeProps)
      )
    },
    children
  );
