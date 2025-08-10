import React from 'react';
import PageHeader from '../components/PageHeader';

const testimonials = [
    {
        quote: "The team was supportive from start to finish. Highly recommend them for solar needs.",
        author: "Mrs. Sunita Sharma",
        location: "Kota",
    },
    {
        quote: "MS Solar provided an excellent solution for our rooftop system. Professional service and timely installation.",
        author: "Mr. Sandeep Meena",
        location: "Jaipur",
    },
    {
        quote: "Our electricity costs have been cut by up to 90%. A truly reliable and impactful solution for our business.",
        author: "Pooja Enterprises",
        location: "Thoi, Sikar",
    },
    {
        quote: "From homes to industries, we've seen them deliver reliable solar solutions that make a lasting impact. Their work speaks for itself.",
        author: "BR Industries",
        location: "Bikaner",
    }
];

const TestimonialsPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Trusted by Hundreds, Valued by All" subtitle="Our clients speak for our work. Their satisfaction and trust drive us forward." />
            
             <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-surface p-8 rounded-lg shadow-lg">
                                <svg className="w-12 h-12 text-primary/30 mb-4" viewBox="0 0 44 36" fill="currentColor"><path d="M0 36h16V20H4C4 12.2 10.2 6 18 6V0C8.2 0 0 8.2 0 18v18zm28 0h16V20H32c0-7.8 6.2-14 14-14V0c-9.8 0-18 8.2-18 18v18z"/></svg>
                                <blockquote className="text-lg text-text-secondary leading-relaxed">
                                    “{testimonial.quote}”
                                </blockquote>
                                <footer className="mt-6">
                                    <p className="font-bold text-secondary">{testimonial.author}</p>
                                    <p className="text-sm text-text-secondary">{testimonial.location}</p>
                                </footer>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialsPage;