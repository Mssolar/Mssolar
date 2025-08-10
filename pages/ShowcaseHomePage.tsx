
import React from 'react';
import Card from '../components/Card';

const TextIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>;
const ImageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const JsonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l-4 4m0 0l-4 4m4-4H6" /></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l.01.01" /></svg>;

const features = [
  { title: 'Text Generation', description: 'Generate creative text from a prompt.', linkTo: '/showcase/text', icon: <TextIcon /> },
  { title: 'Image Generation', description: 'Create photorealistic images from text.', linkTo: '/showcase/image', icon: <ImageIcon /> },
  { title: 'Streaming Chat', description: 'Engage in a continuous conversation.', linkTo: '/showcase/chat', icon: <ChatIcon /> },
  { title: 'JSON Mode', description: 'Get structured JSON data as output.', linkTo: '/showcase/json', icon: <JsonIcon /> },
  { title: 'Search Grounding', description: 'Answer questions with Google Search.', linkTo: '/showcase/search', icon: <SearchIcon /> }
];

const ShowcaseHomePage: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-text-primary mb-2">Gemini API Showcase</h2>
      <p className="text-text-secondary mb-8">
        A demonstration of several features of the Google Gemini API, running right in your browser.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map(feature => (
          <Card key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseHomePage;
