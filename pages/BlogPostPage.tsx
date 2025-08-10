
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import PageHeader from '../components/PageHeader';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    
    const postIndex = blogPosts.findIndex(p => p.slug === slug);
    const post = blogPosts[postIndex];

    const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
    const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

    if (!post) {
        return (
            <>
                <PageHeader title="Post Not Found" />
                <div className="text-center py-24">
                    <p className="text-text-secondary">Sorry, we couldn't find the post you're looking for.</p>
                    <Link to="/blog" className="mt-4 inline-block px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors">
                        Back to Blog
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="relative h-96 bg-gray-800">
                <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">{post.category}</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mt-2">{post.title}</h1>
                </div>
            </div>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                         <div className="mb-8">
                             <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold group">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Back to All Articles</span>
                            </Link>
                        </div>

                        <div className="flex items-center mb-8">
                            <img src={post.authorImageUrl} alt={post.author} className="w-14 h-14 rounded-full object-cover" />
                            <div className="ml-4">
                                <p className="font-bold text-text-primary">{post.author}</p>
                                <p className="text-sm text-text-secondary">{post.date}</p>
                            </div>
                        </div>

                        <article className="prose lg:prose-xl max-w-none text-text-secondary">
                            {post.content}
                        </article>

                        <div className="mt-12 pt-8 border-t border-border flex justify-between items-start gap-4 sm:gap-8">
                            <div className="w-1/2">
                                {prevPost && (
                                    <Link to={`/blog/${prevPost.slug}`} className="block text-left text-primary hover:underline group">
                                        <span className="text-sm text-text-secondary">Previous Article</span>
                                        <p className="font-bold group-hover:text-primary-dark line-clamp-2">&larr; {prevPost.title}</p>
                                    </Link>
                                )}
                            </div>
                            <div className="w-1/2">
                                {nextPost && (
                                    <Link to={`/blog/${nextPost.slug}`} className="block text-right text-primary hover:underline group">
                                        <span className="text-sm text-text-secondary">Next Article</span>
                                        <p className="font-bold group-hover:text-primary-dark line-clamp-2">{nextPost.title} &rarr;</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostPage;