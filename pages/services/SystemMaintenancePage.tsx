
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

const SystemMaintenancePage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="System Maintenance & Monitoring"
                subtitle="Protecting your investment with proactive care and advanced monitoring."
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
                             <img src="https://ik.imagekit.io/mssolar/ai-services/maintenance.png?updatedAt=1754932174246" alt="Solar technician in uniform cleaning solar panels on a rooftop" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary">Maximize Performance, Ensure Longevity</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                A solar power system is a long-term asset. Our comprehensive maintenance and monitoring services ensure it operates at peak performance for its entire 25+ year lifespan. We take a proactive approach to system care, identifying and addressing potential issues before they impact your energy generation and savings.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Scheduled preventative maintenance checks.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Advanced remote monitoring of system performance.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Prompt on-site support from our expert technicians.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">Our Commitment to Your System's Health</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">We offer complete peace of mind with our service packages.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Performance Audits" description="We conduct regular audits to ensure every component is functioning optimally and delivering the expected output." />
                            <FeatureCard title="Professional Cleaning" description="Our team provides professional cleaning services to remove dust and debris that can hinder panel efficiency." />
                            <FeatureCard title="Detailed Reporting" description="Receive easy-to-understand reports on your system's performance, energy generation, and savings." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Keep Your Solar System at 100%</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Learn more about our annual maintenance contracts (AMC) and service packages designed to protect your solar investment.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Get Service Details</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default SystemMaintenancePage;
