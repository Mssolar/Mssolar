
import React, { useState, useCallback } from 'react';
import { generateJsonData } from '../services/geminiService';
import type { Recipe } from '../types';
import Spinner from '../components/Spinner';
import PageWrapper from '../components/PageWrapper';

const JsonModePage: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [rawJson, setRawJson] = useState<string>('');

    const handleGenerate = useCallback(async () => {
        setIsLoading(true);
        setRecipes([]);
        setRawJson('');
        setError('');
        try {
            const jsonString = await generateJsonData();
            setRawJson(jsonString);
            const parsedData = JSON.parse(jsonString);
            if (parsedData.error) {
                setError(parsedData.error);
            } else {
                setRecipes(parsedData);
            }
        } catch (err: any) {
            setError('Failed to parse JSON response. See raw output below.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <PageWrapper title="JSON Mode with Schema">
            <div className="bg-surface p-6 rounded-lg border border-border">
                <p className="text-text-secondary mb-4">
                    Click the button below to ask Gemini for a list of cookie recipes. The API is instructed to return the data in a specific JSON format, which is then parsed and displayed.
                </p>
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                >
                    {isLoading ? <Spinner /> : 'Generate Recipe Data'}
                </button>
                {error && <p className="text-red-400 mt-4">{error}</p>}
                
                {isLoading && <div className="mt-6 flex justify-center"><Spinner /></div>}
                
                {!isLoading && recipes.length > 0 && (
                    <div className="mt-6 space-y-4">
                        <h3 className="text-xl font-bold">Generated Recipes:</h3>
                        {recipes.map((recipe, index) => (
                            <div key={index} className="bg-background p-4 rounded-md border border-border">
                                <h4 className="text-lg font-semibold text-primary">{recipe.recipeName}</h4>
                                <ul className="list-disc list-inside mt-2 text-text-secondary">
                                    {recipe.ingredients.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {!isLoading && rawJson && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Raw JSON Response:</h3>
                        <pre className="bg-background p-4 rounded-md border border-border text-sm text-green-300 overflow-x-auto">
                            <code>{JSON.stringify(JSON.parse(rawJson), null, 2)}</code>
                        </pre>
                    </div>
                )}
            </div>
        </PageWrapper>
    );
};

export default JsonModePage;
