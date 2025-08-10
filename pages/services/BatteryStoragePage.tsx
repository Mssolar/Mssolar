
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-surface p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
    </div>
);

const BatteryStoragePage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Battery Storage Solutions"
                subtitle="Store your solar energy and achieve true energy independence, day and night."
            />
            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold group mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Back to All Services</span>
                    </Link>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://ik.imagekit.io/mssolar/ai-services/battery.png?updatedAt=1754932174315" alt="Sleek, wall-mounted solar battery storage system in a modern home garage" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary">Power Through the Night</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                Don't let the sunset limit your solar savings. With a solar battery storage system, you can store the excess energy your panels generate during the day and use it to power your home or business at night or during power outages. It's the key to unlocking 24/7 energy security and maximizing your self-consumption.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Seamless, automatic backup power during grid outages.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Maximize the use of your own clean solar energy.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Top-tier battery technology for long life and reliability.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">The Future of Home Energy</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">A solar battery is more than just backup; it's a smarter way to manage your power.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Complete Independence" description="Drastically reduce your reliance on the utility grid and protect yourself from ever-increasing electricity prices." />
                            <FeatureCard title="Uninterrupted Power" description="Keep your lights on, appliances running, and business operational when the grid goes down." />
                            <FeatureCard title="Optimize Savings" description="Use your stored solar energy during peak evening hours when grid electricity is most expensive." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Ready for 24/7 Solar Power?</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Discover the right battery storage solution for your property. Contact us to learn about our hybrid solar systems.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Explore Battery Options</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default BatteryStoragePage;
