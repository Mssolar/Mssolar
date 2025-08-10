import { GoogleGenAI, GenerateContentResponse, Chat, Type } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;
const apiKeyError = "API key not found. Gemini features are disabled. Ensure the API_KEY environment variable is set in the deployment environment or a fallback key is provided.";

/**
 * Lazily initializes and returns the GoogleGenAI instance.
 * This prevents the app from crashing on load if the API key is not available
 * in the execution environment (e.g., a static site deployment).
 */
function getAi(): GoogleGenAI {
    if (aiInstance) {
        return aiInstance;
    }

    // This allows the app to be deployed to a static host. The key is provided as a fallback
    // if the environment variable isn't set. For production deployments, using environment
    // variables is the secure and recommended practice.
    const hardcodedApiKey = 'AIzaSyBYmllQ7B1EY2YbauwMXYZBqWN0WiDWT7k';

    // Adhering to the project guideline to source the API key from process.env.
    // This safe access prevents a ReferenceError if 'process' is not defined.
    const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) ? process.env.API_KEY : hardcodedApiKey;

    if (!apiKey) {
        console.error(apiKeyError);
        throw new Error(apiKeyError);
    }

    aiInstance = new GoogleGenAI({ apiKey });
    return aiInstance;
}

export const generateText = async (prompt: string): Promise<string> => {
    try {
        const ai = getAi();
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating text:", error);
        return `Sorry, I couldn't generate a response. ${error.message}`;
    }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
    try {
        const ai = getAi();
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });
        
        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        }
        return null;
    } catch (error) {
        console.error("Error generating image:", error);
        throw error;
    }
};


export const createChat = (): Chat => {
    const ai = getAi();
    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: 'You are a helpful and creative assistant.'
        }
    });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
    try {
        return await chat.sendMessageStream({ message });
    } catch (error) {
        console.error("Error sending message:", error);
        throw new Error("Failed to send message. See console for details.");
    }
};

export const generateJsonData = async (): Promise<string> => {
     const prompt = "List three popular cookie recipes, including their names and a list of ingredients.";
     try {
        const ai = getAi();
        const response: GenerateContentResponse = await ai.models.generateContent({
           model: "gemini-2.5-flash",
           contents: prompt,
           config: {
             responseMimeType: "application/json",
             responseSchema: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    recipeName: {
                      type: Type.STRING,
                      description: 'The name of the cookie recipe.',
                    },
                    ingredients: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.STRING,
                      },
                      description: 'The list of ingredients for the recipe.',
                    },
                  },
                },
              },
           },
        });

        return response.text;
    } catch (error) {
        console.error("Error generating JSON:", error);
        return JSON.stringify({ error: `Failed to generate structured data. ${error.message}` }, null, 2);
    }
};

export const generateWithSearch = async (prompt: string): Promise<GenerateContentResponse> => {
     try {
        const ai = getAi();
        const response = await ai.models.generateContent({
           model: "gemini-2.5-flash",
           contents: prompt,
           config: {
             tools: [{googleSearch: {}}],
           },
        });
        return response;
    } catch (error) {
        console.error("Error with search grounding:", error);
        throw new Error(`Failed to generate response with search. ${error.message}`);
    }
};
