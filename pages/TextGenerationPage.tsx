
import React, { useState, useCallback } from 'react';
import { generateText } from '../services/geminiService';
import Spinner from '../components/Spinner';
import PageWrapper from '../components/PageWrapper';

const TextGenerationPage: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('Write a short story about a robot who discovers music.');
    const [result, setResult] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('Prompt cannot be empty.');
            return;
        }
        setIsLoading(true);
        setResult('');
        setError('');
        try {
            const response = await generateText(prompt);
            setResult(response);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <PageWrapper title="Text Generation">
            <div className="bg-surface p-6 rounded-lg border border-border">
                <div className="flex flex-col gap-4">
                    <label htmlFor="prompt" className="font-semibold text-text-secondary">Your Prompt</label>
                    <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., Explain quantum computing in simple terms"
                        className="w-full h-32 p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !prompt}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? <Spinner /> : 'Generate Text'}
                    </button>
                </div>
                {error && <p className="text-red-400 mt-4">{error}</p>}
                {result && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Result:</h3>
                        <div className="bg-background p-4 rounded-md border border-border whitespace-pre-wrap text-text-secondary">
                           {result}
                        </div>
                    </div>
                )}
            </div>
        </PageWrapper>
    );
};

export default TextGenerationPage;
