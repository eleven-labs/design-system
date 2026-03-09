import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: Parameters<typeof classNames>): string => twMerge(classNames(...inputs));
