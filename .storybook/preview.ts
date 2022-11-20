import '../src/styles/common.scss';
import { tokenVariables } from '@/constants';

const customViewports = {
  extraSmallScreen: {
    name: 'Extra small screen (xs)',
    styles: {
      width: '380px',
      height: '571px'
    },
    type: 'Mobile'
  },
  smallScreen: {
    name: 'Small screen (sm)',
    styles: {
      width: '571px',
      height: '766px'
    },
    type: 'Tablet'
  },
  mediumScreen: {
    name: 'Medium screen (md)',
    styles: {
      width: '1001px',
      height: '766px'
    },
    type: 'Desktop'
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: customViewports
  },
  backgrounds: {
    default: 'white',
    values: Object.entries(tokenVariables['color']).map(([tokenName, tokenValue]) => ({
      name: tokenName,
      value: tokenValue.value
    })),
  },
};
