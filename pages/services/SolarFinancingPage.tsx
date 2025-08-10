
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

const SolarFinancingPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Solar Financing Support"
                subtitle="Making your transition to solar smooth, affordable, and hassle-free."
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
                             <img src="https://ik.imagekit.io/mssolar/ai-services/financing.png?updatedAt=1754932174623" alt="Person positively signing a document with a model solar home on the desk" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold text-secondary">Go Solar with Zero Upfront Cost</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                We believe that financial constraints shouldn't prevent anyone from accessing the benefits of solar energy. That's why we partner with leading financial institutions to offer a range of flexible and attractive financing options, making it easier than ever to own your solar power system.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Low-interest, collateral-free loans for residential systems.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Attractive financing schemes for commercial projects.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>End-to-end assistance with loan applications and paperwork.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">Financial Pathways to Clean Energy</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">We help you find the financing option that works best for your budget.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Start Saving Immediately" description="With many of our financing plans, your monthly loan payment can be lower than your current electricity bill, so you start saving from day one." />
                            <FeatureCard title="Flexible Tenures" description="Choose a loan tenure that suits your financial planning, with easy repayment schedules." />
                            <FeatureCard title="Hassle-Free Process" description="Our dedicated team guides you through the entire financing process, from eligibility checks to final disbursal." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Your Solar Dream is Within Reach</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Don't let the initial cost hold you back. Let's discuss how we can make your switch to solar incredibly affordable.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Explore Financing Options</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default SolarFinancingPage;
