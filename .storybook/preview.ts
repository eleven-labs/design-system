import '../src/styles/common.scss';

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
      width: '571px',
      height: '766px',
    },
    type: 'Tablet',
  },
  mediumScreen: {
    name: 'Medium screen (md)',
    styles: {
      width: '1001px',
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
  options: {
    storySort: {
      order: [
        'Introduction',
        'Concepts and Architecture',
        'Foundations',
        [
          'Design Tokens',
          ['About', 'Color', 'Spacing', 'Typography', 'Icon', 'Layout'],
          'Css Properties',
          'System Props',
          [
            'About',
            'As Props',
            'Color System Props',
            'Spacing System Props',
            'Typography System Props',
            'Layout System Props',
          ],
        ],
        'Components',
      ],
    },
  },
};
