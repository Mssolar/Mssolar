
import React, { useState, useCallback } from 'react';
import { generateImage } from '../services/geminiService';
import Spinner from '../components/Spinner';
import PageWrapper from '../components/PageWrapper';

const ImageGenerationPage: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('A photorealistic image of a majestic lion wearing a crown in a lush jungle.');
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerate = useCallback(async () => {
        if (!prompt.trim()) {
            setError('Prompt cannot be empty.');
            return;
        }
        setIsLoading(true);
        setImageUrl(null);
        setError('');
        try {
            const response = await generateImage(prompt);
            if (response) {
                setImageUrl(response);
            } else {
                setError('Failed to generate image. The result was empty.');
            }
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <PageWrapper title="Image Generation">
            <div className="bg-surface p-6 rounded-lg border border-border">
                <div className="flex flex-col gap-4">
                    <label htmlFor="prompt" className="font-semibold text-text-secondary">Image Prompt</label>
                    <input
                        type="text"
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., A futuristic city on Mars"
                        className="w-full p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !prompt}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {isLoading ? <Spinner /> : 'Generate Image'}
                    </button>
                </div>
                {error && <p className="text-red-400 mt-4">{error}</p>}
                <div className="mt-6 flex justify-center items-center h-96 bg-background rounded-md border border-dashed border-border">
                    {isLoading && <Spinner />}
                    {!isLoading && imageUrl && (
                         <img src={imageUrl} alt="Generated" className="max-w-full max-h-full object-contain rounded-md" />
                    )}
                     {!isLoading && !imageUrl && (
                        <p className="text-text-secondary">Your generated image will appear here</p>
                    )}
                </div>
            </div>
        </PageWrapper>
    );
};

export default ImageGenerationPage;
