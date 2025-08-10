
import React from 'react';

export interface QuoteFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface Project {
    name: string;
    detail: string;
    category: string;
    images: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  authorImageUrl: string;
  date: string;
  category: string;
  content: React.ReactNode;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
}

export interface Recipe {
    recipeName: string;
    ingredients: string[];
}

export interface GroundingChunk {
    web?: {
        uri?: string;
        title?: string;
    };
}
