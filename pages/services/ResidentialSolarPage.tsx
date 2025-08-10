
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

const ResidentialSolarPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Residential Solar Solutions"
                subtitle="Empower your home with clean, reliable, and affordable solar energy."
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
                             <img src="https://ik.imagekit.io/mssolar/ai-services/residential.png?updatedAt=1754932174465" alt="Modern home with rooftop solar panels under a sunny sky" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary">Power Your Home, Secure Your Future</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                Make the smart switch to solar and take control of your energy bills. Our residential solar solutions are custom-designed to meet your home's unique energy needs, helping you reduce your carbon footprint while increasing your property value. Enjoy the peace of mind that comes with energy independence.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Tier-1 Monocrystalline Panels for maximum efficiency.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Full assistance with PM Surya Ghar subsidies.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Seamless installation by certified professionals.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">The MS Solar Advantage for Your Home</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">Our systems provide tangible benefits that you'll notice from day one.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Reduce Bills to Zero" description="Generate enough power to cover your needs and drastically cut or even eliminate your monthly electricity bills." />
                            <FeatureCard title="Increase Property Value" description="Homes with solar installations are more attractive to buyers and often sell for a higher price." />
                            <FeatureCard title="Energy Security" description="Protect your family from power outages and rising electricity costs with a reliable, independent power source." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Ready to Go Solar?</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Let's find the perfect solar solution for your home. Get a free, no-obligation consultation with our solar experts today.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Request a Free Consultation</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default ResidentialSolarPage;
