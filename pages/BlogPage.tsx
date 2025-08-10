import React from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogData';

const BlogPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Our Solar Insights"
                subtitle="Stay updated with the latest news, tips, and trends in the solar industry from our team of experts."
            />
            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;