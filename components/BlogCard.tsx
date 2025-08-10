import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <Link to={`/blog/${post.slug}`} className="flex flex-col group bg-surface rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative overflow-hidden h-56">
                <img 
                    src={post.imageUrl} 
                    alt={`Blog post titled ${post.title}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{post.category}</div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <div>
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 min-h-[5rem]">{post.title}</h3>
                    <p className="text-text-secondary mt-2 text-sm">{post.excerpt}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-border flex items-center">
                    <img src={post.authorImageUrl} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-text-primary">{post.author}</p>
                        <p className="text-xs text-text-secondary">{post.date}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;