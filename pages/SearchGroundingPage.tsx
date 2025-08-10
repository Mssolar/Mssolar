
import React, { useState, useCallback } from 'react';
import type { GenerateContentResponse } from '@google/genai';
import { generateWithSearch } from '../services/geminiService';
import type { GroundingChunk } from '../types';
import Spinner from '../components/Spinner';
import PageWrapper from '../components/PageWrapper';

const SearchGroundingPage: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('Who won the most recent Super Bowl?');
    const [response, setResponse] = useState<GenerateContentResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('Prompt cannot be empty.');
            return;
        }
        setIsLoading(true);
        setResponse(null);
        setError('');
        try {
            const apiResponse = await generateWithSearch(prompt);
            setResponse(apiResponse);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const sources = response?.candidates?.[0]?.groundingMetadata?.groundingChunks?.filter(
      (chunk: GroundingChunk) => chunk.web && chunk.web.uri
    ) as GroundingChunk[] || [];

    return (
        <PageWrapper title="Search Grounding">
            <div className="bg-surface p-6 rounded-lg border border-border">
                <div className="flex flex-col gap-4">
                    <label htmlFor="prompt" className="font-semibold text-text-secondary">Your Question</label>
                    <input
                        type="text"
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., What are the latest developments in AI?"
                        className="w-full p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !prompt}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? <Spinner /> : 'Ask with Google Search'}
                    </button>
                </div>
                {error && <p className="text-red-400 mt-4">{error}</p>}
                {response && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Answer:</h3>
                        <div className="bg-background p-4 rounded-md border border-border whitespace-pre-wrap text-text-secondary">
                           {response.text}
                        </div>

                        {sources.length > 0 && (
                            <div className="mt-6">
                                <h4 className="text-lg font-bold mb-2">Sources:</h4>
                                <ul className="space-y-2">
                                    {sources.map((chunk, index) => (
                                        <li key={index} className="bg-background p-3 rounded-md border border-border">
                                            <a
                                                href={chunk.web?.uri}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                {chunk.web?.title || chunk.web?.uri}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </PageWrapper>
    );
};

export default SearchGroundingPage;
