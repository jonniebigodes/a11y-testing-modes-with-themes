import React from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticleCardDemo: React.FC = () => {
  const sampleArticles = [
    {
      title: "Can coffee make you a better developer?",
      description:
        "Learn how coffee can improve your focus, productivity, and overall well-being, making it a great companion for developers.",
      author: "Sarah Johnson",
      creationDate: "June 10, 2025",
      imageUrl: "/sample-coffee-mug.jpg",
      imageAlt: "AI-powered web development tools illustration",
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-light-primary dark:bg-dark-primary">
      <div className="container mx-auto px-4 py-8">
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
