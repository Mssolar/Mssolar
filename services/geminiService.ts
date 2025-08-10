
import { GoogleGenAI, GenerateContentResponse, Chat, Type } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateText = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating text:", error);
        return "Sorry, I couldn't generate a response. Please check the console for details.";
    }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
    try {
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
        return null;
    }
};


export const createChat = (): Chat => {
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
        return JSON.stringify({ error: "Failed to generate structured data. Please check the console for details." }, null, 2);
    }
};

export const generateWithSearch = async (prompt: string): Promise<GenerateContentResponse> => {
     try {
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
        throw new Error("Failed to generate response with search. Please check the console for details.");
    }
};
