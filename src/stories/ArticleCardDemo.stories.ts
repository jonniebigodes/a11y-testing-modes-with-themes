import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleCardDemo } from "./ArticleCardDemo";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCardDemo,
  parameters: {
    layout: "fullscreen",
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
