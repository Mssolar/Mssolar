
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

const CommercialSolarPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Commercial & Industrial Solar"
                subtitle="A powerful financial strategy to slash operating costs and boost your green credentials."
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
                             <img src="https://ik.imagekit.io/mssolar/ai-services/commercial.png?updatedAt=1754932174620" alt="Large industrial factory with a roof covered in solar panels" className="w-full h-full object-cover" />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold text-secondary">Invest in Profitability and Sustainability</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                For businesses and industrial enterprises, solar power is a strategic investment that delivers immediate and long-term financial benefits. We engineer robust, high-performance solar solutions that significantly reduce your energy overheads, provide budget certainty, and enhance your corporate image.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Scalable systems for businesses and industries of all sizes.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Access Accelerated Depreciation for significant tax benefits.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Expert project management from initial audit to final commissioning.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">A Strategic Asset for Your Business</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">Solar power works as hard as you do, delivering value across your entire operation.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Strong ROI" description="Lock in your energy costs for 25+ years and enjoy a rapid payback period, turning a variable expense into a valuable asset." />
                            <FeatureCard title="Enhance Brand Image" description="Showcase your commitment to sustainability, attracting eco-conscious customers and improving your ESG profile." />
                            <FeatureCard title="Operational Resilience" description="Reduce dependence on an unpredictable grid and ensure your operations continue smoothly, even during power fluctuations." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Unlock Your Business's Solar Potential</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Discover how much your business can save. Schedule a free, no-obligation energy audit with our commercial solar experts.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Request a Free Audit</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default CommercialSolarPage;
