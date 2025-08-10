
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

const SolarWaterPumpPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Solar Water Pump Solutions"
                subtitle="Harnessing the sun to deliver reliable, low-cost water for agriculture and beyond."
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
                             <img src="https://ik.imagekit.io/mssolar/ai-services/pump.png?updatedAt=1754932174360" alt="Solar water pump operating in a lush green agricultural field" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary">A New Dawn for Irrigation</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                Break free from unreliable grid electricity and expensive diesel. Our solar water pumps offer a dependable, low-maintenance, and cost-effective solution for your agricultural, domestic, and industrial water needs. Especially effective in remote areas, they provide water security when and where you need it most.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Efficient pumps available from 0.5 HP to 10 HP.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>MNRE-approved, eco-friendly, and highly durable components.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Supports modern irrigation like drip & sprinkler systems.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">The Power of Solar Pumping</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">Experience the freedom that comes with a self-sufficient water supply.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Zero Running Costs" description="Once installed, your water is powered by free, abundant sunlight. Say goodbye to fuel costs and electricity bills for irrigation." />
                            <FeatureCard title="Increase Crop Yield" description="Consistent and timely water supply leads to better crop health, higher yields, and increased profitability." />
                            <FeatureCard title="Low Maintenance" description="With no complex engines or moving parts, our solar pumps are built to last and require minimal upkeep." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Ready to Transform Your Farm?</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Learn how a solar water pump can revolutionize your irrigation and boost your income. We also provide full support for PM-KUSUM scheme applications.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Inquire About Solar Pumps</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default SolarWaterPumpPage;
