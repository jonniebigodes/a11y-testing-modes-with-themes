import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/index.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    viewport: {
      options: {
        xsm: { name: "XSmall", styles: { width: "320px", height: "900px" } },
        sm: { name: "Small", styles: { width: "640px", height: "900px" } },
        md: { name: "Medium", styles: { width: "768px", height: "900px" } },
        lg: { name: "Large", styles: { width: "1024px", height: "900px" } },
        xl: { name: "XL", styles: { width: "1280px", height: "900px" } },
        "2xl": { name: "2XL", styles: { width: "1536px", height: "900px" } },
        /*  customsmall: {
          name: "Custom Small",
          styles: { width: "375px", height: "375px" },
        }, */
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
