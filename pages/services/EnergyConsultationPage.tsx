
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

const EnergyConsultationPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Energy Consultation & Savings Analysis"
                subtitle="Data-driven insights to design a system that maximizes your savings and ROI."
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
                         <div className="md:order-2 rounded-lg overflow-hidden shadow-2xl">
                             <img src="https://ik.imagekit.io/mssolar/ai-services/consultation.png?updatedAt=1754932174360" alt="Energy consultant showing a client charts on a tablet" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold text-secondary">A Smarter Approach to Solar</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                The most effective solar solution starts with a deep understanding of your energy consumption. Our expert consultants conduct a thorough analysis of your energy usage patterns and property to design a system that is perfectly tailored to your needs, ensuring you achieve the maximum possible savings and the best return on your investment.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Detailed analysis of your past electricity bills.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>On-site assessment of structural and electrical considerations.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Clear, transparent proposals with accurate financial projections.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">Our Data-Driven Process</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">We leave no stone unturned to design your ideal solar system.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Load Profiling" description="We map your daily and seasonal energy needs to determine the optimal system size and capacity." />
                            <FeatureCard title="Financial Modeling" description="Our team provides a detailed breakdown of your projected savings, payback period, and long-term ROI." />
                            <FeatureCard title="Technology Selection" description="Based on your needs, we recommend the best combination of panels, inverters, and components for performance and value." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Get Your Personalized Solar Roadmap</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Start your solar journey with a data-backed plan. Book your free, comprehensive energy consultation today.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Book a Free Consultation</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default EnergyConsultationPage;
