import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/BlogCard';

const stats = [
    { value: '2,000+', label: 'Solar Installations' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '25+ MW', label: 'Total Installed Capacity' },
    { value: '2,500+', label: 'Solar Water Pumps Deployed' },
];

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-surface p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
    </div>
);

interface HomePageProps {
    onGetQuoteClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetQuoteClick }) => {
    const latestPosts = blogPosts.slice(0, 3);

    const services = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
            title: 'Residential Solar',
            description: 'Customized solar solutions for homes to reduce electricity bills and carbon footprint.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 4h5m-5 4h5" /></svg>,
            title: 'Commercial & Industrial',
            description: 'Powering businesses and industries with reliable and cost-effective solar energy.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path fillRule="evenodd" d="M17.66 10.34a1.25 1.25 0 011.68.42l.06.12 2.5 5a1.25 1.25 0 01-2.22 1.1l-1.94-3.88-3.88 1.94a1.25 1.25 0 01-1.1-2.22l5-2.5zM4.3 11.6a1.25 1.25 0 011.1 2.22l-3.88 1.94-1.94-3.88a1.25 1.25 0 112.22-1.1l2.5 5zM10.34 4.3a1.25 1.25 0 011.1-2.22l5 2.5-3.88 1.94-1.94-3.88a1.25 1.25 0 01-.42-1.68z" clipRule="evenodd"/></svg>,
            title: 'Solar Water Pumps',
            description: 'Efficient solar-powered pumps for agriculture and domestic use, ideal for remote areas.'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center bg-gray-800 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        src="https://ik.imagekit.io/mssolar/Home%20Solar%20Panels%20and%20Systems.webm/ik-video.mp4?updatedAt=1754414705710"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://ik.imagekit.io/mssolar/MS%20SOLAR%201.png?updatedAt=1754762614576"
                        className="w-full h-full object-cover opacity-40"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">Your Solar Partner for the Long Run</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300">Clean, Efficient, and Affordable Energy Solutions for a Brighter Future.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link to="/services" className="px-8 py-3 bg-primary border border-transparent text-white font-bold rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">Our Services</Link>
                         <button
                            onClick={onGetQuoteClick}
                            className="px-8 py-3 bg-accent border border-transparent text-secondary font-bold rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                        >
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* About Us Snippet */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-primary font-bold uppercase">Who We Are</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mt-2">Trusted Name in Renewable Energy Since 2015</h2>
                            <p className="mt-4 text-lg text-text-secondary">MS Solar Power Corporation Pvt. Ltd., established in Jaipur, Rajasthan, is your trusted partner for smart, sustainable, and cost-effective solar solutions. We are committed to empowering homes, businesses, and industries with clean energy independence.</p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckCircleIcon /><span>Reliable Engineering & Prompt Service</span></li>
                                <li className="flex items-start gap-3"><CheckCircleIcon /><span>End-to-End Project Execution</span></li>
                                <li className="flex items-start gap-3"><CheckCircleIcon /><span>2000+ Successful Installations</span></li>
                            </ul>
                            <Link to="/about" className="mt-8 inline-block px-6 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity">Learn More About Us</Link>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                           <img src="https://ik.imagekit.io/mssolar/MS%20SOLAR%201.png?updatedAt=1754762614576" alt="MS Solar engineering team installing solar panels" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Stats Section */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map(stat => (
                            <div key={stat.label} className="bg-surface p-6 rounded-lg shadow-lg animate-fade-in-up">
                                <p className="text-4xl sm:text-5xl font-extrabold text-primary">{stat.value}</p>
                                <p className="mt-2 text-sm font-medium text-text-secondary uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-primary font-bold uppercase">What We Offer</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mt-2">Comprehensive Solar Solutions</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">We deliver end-to-end solar energy solutions tailored to meet the unique needs of our customers.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => <ServiceCard key={service.title} {...service} />)}
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/services" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors">View All Services</Link>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 sm:py-24 bg-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-primary font-bold uppercase">Our Insights</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mt-2">Latest From Our Blog</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Stay updated with the latest news, tips, and trends in the solar industry.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPosts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/blog" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors">
                            Read More Articles
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let's Power The Future Together!</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">Partner with us to power a cleaner future. Whether you're a homeowner, business, or community — we're here to deliver smart, sustainable solar solutions that make a difference.</p>
                    <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Request a Free Consultation</Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;