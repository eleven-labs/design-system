import './Input.scss';

import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { SpacingSystemProps } from '../../../types';

export interface InputProps
  extends SpacingSystemProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'search' | 'form';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, ...nativeProps }, ref) =>
    React.createElement('input', {
      ...omitSystemProps(nativeProps),
      className: systemClassName<SpacingSystemProps>({
        ...nativeProps,
        className: classNames(
          'input',
          { [`input--${variant}`]: variant },
          nativeProps.className
        )
      }),
      ref
    })
);
