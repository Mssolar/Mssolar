
import React from 'react';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-text-primary mb-2">{title}</h2>
      <p className="text-text-secondary mb-8">Explore the capabilities of the Gemini API for this feature.</p>
      {children}
    </div>
  );
};

export default PageWrapper;
