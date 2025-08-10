
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { createChat, sendMessageStream } from '../services/geminiService';
import type { ChatMessage } from '../types';
import Spinner from '../components/Spinner';
import PageWrapper from '../components/PageWrapper';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            chatRef.current = createChat();
        } catch (err: any) {
            setError(`Failed to initialize chat: ${err.message}`);
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError('');

        try {
            if (!chatRef.current) {
                throw new Error("Chat not initialized. Check for an API key error.");
            }
            const stream = await sendMessageStream(chatRef.current, input);
            
            let modelResponse = '';
            const modelMessageId = (Date.now() + 1).toString();
            
            setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);

            for await (const chunk of stream) {
                modelResponse += chunk.text;
                setMessages(prev => prev.map(msg => msg.id === modelMessageId ? { ...msg, text: modelResponse } : msg));
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred while sending the message.');
            const errorId = (Date.now() + 2).toString();
            setMessages(prev => [...prev, { id: errorId, role: 'model', text: `Sorry, something went wrong: ${err.message}` }]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading]);

    return (
        <PageWrapper title="Streaming Chat">
            <div className="bg-surface border border-border rounded-lg h-[70vh] flex flex-col">
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-lg p-3 rounded-lg ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-background text-text-secondary'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && messages[messages.length - 1]?.role !== 'model' && (
                         <div className="flex justify-start">
                            <div className="max-w-lg p-3 rounded-lg bg-background text-text-secondary">
                                <Spinner />
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-border">
                    {error && <p className="text-red-400 text-sm mb-2 text-center">{error}</p>}
                    <form onSubmit={handleSend} className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 p-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition"
                            disabled={isLoading || !!error}
                        />
                        <button type="submit" disabled={isLoading || !input || !!error} className="px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ChatPage;
