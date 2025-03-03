import type { Parameters } from '@storybook/vue3'
import { withScreenshot } from 'storycap';

export const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  screenshot: {
    viewports: {
      large: {
        width: 1024,
        height: 768,
      },
      small: {
        width: 375,
        height: 668,
      },
      xsmall: {
        width: 320,
        height: 568,
      },
    },
  },
};

export const decorators = [
  withScreenshot, // Registration the decorator is required
];
