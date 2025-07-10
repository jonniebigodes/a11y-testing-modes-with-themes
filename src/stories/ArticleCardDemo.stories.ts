import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleCardDemo } from "./ArticleCardDemo";
import { allModes } from "../../.storybook/modes";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCardDemo,
  parameters: {
    layout: "fullscreen",
    chromatic: {
      //🔶 Test each story for ArticleCard in two modes
      modes: {
        /*  light: allModes["light"],
        dark: allModes["dark"], */
        /*  mobile: allModes["xsm"],
        desktop: allModes["md"],
        large: allModes["xl"],
        custom: allModes["specific"], */
      },
    },
  },
} satisfies Meta<typeof ArticleCardDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};

export const MembersOnly: Story = {
  args: {},
  parameters: {
    themes: {
      defaultTheme: "light",
    },
  },
};

export const FirstStory: Story = {
  args: {},
  globals: {
    viewport: {
      value: "md",
    },
  },
};

export const SecondStory: Story = {
  globals: {
    viewport: {
      value: "md",
    },
  },
  parameters: {
    chromatic: {
      modes: {
        lg: allModes["md"],
        xl: allModes["xl"],
      },
    },
  },
};
