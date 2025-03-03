import { ScreenshotOptions } from "storycap";

declare module '@storybook/vue3' {
  interface Parameters {
    screenshot?: ScreenshotOptions;
  }
}
