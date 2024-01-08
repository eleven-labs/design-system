import '../src/styles/common.scss';

import { tokenVariables } from '../src/constants';

const customViewports = {
  extraSmallScreen: {
    name: 'Extra small screen (xs)',
    styles: {
      width: '380px',
      height: '571px',
    },
    type: 'Mobile',
  },
  smallScreen: {
    name: 'Small screen (sm)',
    styles: {
      width: `${tokenVariables.breakpoint.sm.value}px`,
      height: '766px',
    },
    type: 'Tablet',
  },
  mediumScreen: {
    name: 'Medium screen (md)',
    styles: {
      width: `${tokenVariables.breakpoint.md.value}px`,
      height: '766px',
    },
    type: 'Desktop',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    exclude: ['as'],
  },
  viewport: {
    viewports: customViewports,
  },
  backgrounds: {
    default: 'seashell',
    values: Object.entries<{ value: string }>({
      ...tokenVariables.color.primary,
      ...tokenVariables.color.secondary,
      ...tokenVariables.color.greyscale,
    }).map(([name, { value }]) => ({
      name,
      value,
    })),
  },
};
