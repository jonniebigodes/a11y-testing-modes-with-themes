import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArticleCard } from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  /* tags: ["autodocs"], */
  argTypes: {
    title: {
      control: "text",
      description: "The title of the article",
    },
    description: {
      control: "text",
      description: "The description or excerpt of the article",
    },
    author: {
      control: "text",
      description: "The author of the article",
    },
    creationDate: {
      control: "text",
      description: "The creation date of the article",
    },
    imageUrl: {
      control: "text",
      description: "URL of the article image",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the article image",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "The Future of Web Development: AI-Powered Tools",
    description:
      "Explore how artificial intelligence is revolutionizing the way we build and maintain web applications. From automated testing to intelligent code completion, discover the tools that are shaping the future of development.",
    author: "Sarah Johnson",
    creationDate: "March 15, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    imageAlt: "AI-powered web development tools illustration",
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "This is a Very Long Article Title That Might Span Multiple Lines and Test the Component's Text Truncation Capabilities",
    description:
      "A comprehensive guide to modern web development practices, covering everything from responsive design to performance optimization and accessibility considerations.",
    author: "Michael Chen",
    creationDate: "March 10, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    imageAlt: "Modern web development workspace",
  },
};

export const ShortContent: Story = {
  args: {
    title: "Quick Tips for Better Code",
    description: "Simple practices that make a big difference.",
    author: "Alex Rivera",
    creationDate: "March 12, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    imageAlt: "Code on computer screen",
  },
};

export const TechArticle: Story = {
  args: {
    title: "Understanding React Server Components",
    description:
      "Dive deep into the architecture and benefits of React Server Components, exploring how they improve performance and user experience in modern web applications.",
    author: "Emma Wilson",
    creationDate: "March 8, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    imageAlt: "React logo and code",
  },
};

export const LightTheme: Story = {
  args: {
    title: "Light Theme Example",
    description:
      "This story demonstrates the component in light theme mode with proper contrast and readability.",
    author: "Light User",
    creationDate: "March 20, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    imageAlt: "Light theme example",
  },
  parameters: {
    themes: {
      defaultTheme: "light",
    },
  },
};

export const DarkTheme: Story = {
  args: {
    title: "Dark Theme Example",
    description:
      "This story demonstrates the component in dark theme mode with proper contrast and readability.",
    author: "Dark User",
    creationDate: "March 20, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    imageAlt: "Dark theme example",
  },
  parameters: {
    themes: {
      defaultTheme: "dark",
    },
  },
};
