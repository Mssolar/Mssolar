
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

const SolarLightingPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Solar Lighting Solutions"
                subtitle="Brighten your world with sustainable, cost-effective, and independent lighting."
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
                             <img src="https://ik.imagekit.io/mssolar/ai-services/lighting.png?updatedAt=1754932174245" alt="A beautifully lit public park at dusk with modern solar-powered streetlights" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary">Reliable Illumination, Powered by the Sun</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                Our all-in-one solar lighting solutions are the perfect choice for illuminating streets, parks, parking lots, and remote areas where grid access is a challenge. These self-contained units are easy to install, require minimal maintenance, and operate with zero electricity costs, providing security and visibility where it's needed most.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckIcon /><span>Integrated systems with panel, battery, and LED light.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Automatic dusk-to-dawn operation.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon /><span>Durable, weather-resistant designs for long life.</span></li>
                            </ul>
                        </div>
                    </div>

                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-secondary">Lighting Up Communities, Sustainably</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">Our solar lights are ideal for a wide range of applications.</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard title="Public Safety" description="Enhance the safety and security of public spaces like streets, gardens, and community areas with reliable lighting." />
                            <FeatureCard title="Zero Running Cost" description="Eliminate electricity bills for outdoor lighting completely. These systems are 100% powered by the sun." />
                            <FeatureCard title="Easy Installation" description="No need for expensive and disruptive trenching or cabling. Our solar lights can be installed quickly and easily." />
                        </div>
                    </section>
                    
                    <section className="mt-16 sm:mt-24 bg-primary/10 p-8 sm:p-12 rounded-lg text-center">
                       <h2 className="text-3xl font-extrabold text-secondary">Illuminate Your Space the Smart Way</h2>
                       <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">Looking for an efficient and eco-friendly lighting solution? Let's discuss your requirements.</p>
                       <Link to="/contact" className="mt-8 inline-block px-8 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-opacity transform hover:scale-105">Inquire About Solar Lighting</Link>
                    </section>
                </div>
            </div>
        </>
    );
};
export default SolarLightingPage;
