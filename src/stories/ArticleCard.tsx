import React from "react";

export interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  creationDate: string;
  imageUrl: string;
  imageAlt: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  author,
  creationDate,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="group relative bg-light-primary dark:bg-dark-primary rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0">
      {/* Card Container - Horizontal Layout */}
      <div className="flex h-full">
        {/* Image Section - 1/3 width */}
        <div className="w-1/3 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Enhanced image overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Subtle border overlay */}
          <div className="absolute inset-0 border-r border-white/20 dark:border-gray-600/20" />
        </div>

        {/* Content Section - 2/3 width */}
        <div className="w-2/3 p-8 flex flex-col justify-between">
          {/* Main Content */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h2>

            {/* Description */}
            <p className="text-light-text-muted dark:text-dark-text-muted text-base leading-relaxed mb-6 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Footer - Author Info Only */}
          <div className="flex items-center space-x-4 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">
                  {author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-light-text dark:text-dark-text">
                {author}
              </p>
              <p className="text-sm text-light-text-muted dark:text-dark-text-muted font-medium">
                {creationDate}
              </p>
            </div>
            {/* Reading time indicator */}
            <div className="flex items-center text-xs text-gray-400 dark:text-gray-500">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              5 min read
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
};
