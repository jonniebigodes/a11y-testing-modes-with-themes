import React, { useState } from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticleCardDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const sampleArticles = [
    {
      title: "The Future of Web Development: AI-Powered Tools",
      description:
        "Explore how artificial intelligence is revolutionizing the way we build and maintain web applications. From automated testing to intelligent code completion, discover the tools that are shaping the future of development.",
      author: "Sarah Johnson",
      creationDate: "March 15, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      imageAlt: "AI-powered web development tools illustration",
    },
    {
      title: "Understanding React Server Components",
      description:
        "Dive deep into the architecture and benefits of React Server Components, exploring how they improve performance and user experience in modern web applications.",
      author: "Emma Wilson",
      creationDate: "March 8, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      imageAlt: "React logo and code",
    },
    {
      title: "Quick Tips for Better Code",
      description:
        "Simple practices that make a big difference in code quality and maintainability. Learn the small habits that lead to better software.",
      author: "Alex Rivera",
      creationDate: "March 12, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      imageAlt: "Code on computer screen",
    },
    {
      title: "Mastering TypeScript in 2024",
      description:
        "A comprehensive guide to TypeScript best practices, advanced features, and how to leverage the language for better development experience.",
      author: "Michael Chen",
      creationDate: "March 10, 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      imageAlt: "TypeScript code on screen",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-dark-primary" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1
              className={`text-3xl font-bold ${
                isDark ? "text-dark-text" : "text-gray-900"
              } mb-2`}
            >
              Article Card Showcase
            </h1>
            <p
              className={`text-lg ${
                isDark ? "text-dark-text-muted" : "text-gray-600"
              }`}
            >
              Modern article cards with interactive hover effects
            </p>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              isDark
                ? "bg-dark-secondary text-dark-text hover:bg-gray-700 shadow-lg"
                : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 shadow-sm"
            }`}
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Theme indicator */}
        <div
          className={`mb-8 p-4 rounded-xl ${
            isDark
              ? "bg-dark-secondary text-dark-text"
              : "bg-white text-gray-900 border border-gray-200"
          }`}
        >
          <p className="text-sm">
            <strong>Current Theme:</strong>{" "}
            {isDark ? "Dark (#444555)" : "Light"} •<strong> Features:</strong>{" "}
            Hover effects, Image scaling, Interactive elements
          </p>
        </div>

        {/* Article cards grid */}
        <div className="grid gap-8 max-w-6xl">
          {sampleArticles.map((article, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-4xl">
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  creationDate={article.creationDate}
                  imageUrl={article.imageUrl}
                  imageAlt={article.imageAlt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
