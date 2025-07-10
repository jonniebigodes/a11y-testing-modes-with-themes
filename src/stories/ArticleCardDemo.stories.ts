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
        light: allModes["light"],
        dark: allModes["dark"],
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
