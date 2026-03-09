import '../src/styles/tailwind.css';
import '../src/styles/global.css';

import { tokenVariables } from '../src/tokens';

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
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
  backgrounds: {
    default: 'secondary',
    values: Object.entries<{ value: string }>({
      ...tokenVariables.color,
    }).map(([name, { value }]) => ({
      name,
      value,
    })),
  },
};
