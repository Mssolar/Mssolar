import React from 'react';
import PageHeader from '../components/PageHeader';

const AboutPage: React.FC = () => {
    return (
        <>
            <PageHeader 
                title="About MS Solar"
                subtitle="Driving positive change through sustainable energy since 2015."
            />
            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Who We Are */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img src="https://ik.imagekit.io/mssolar/MS%20SOLAR%201.png?updatedAt=1754762614576" alt="MS Solar engineering team" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
                            <p className="mt-4 text-lg text-text-secondary">
                                MS Solar Power Corporation Pvt. Ltd., established in 2015 in Jaipur, Rajasthan, is a trusted name in the field of renewable energy solutions. With a strong commitment to sustainability, innovation, and quality, we specialize in providing customized solar power systems for residential, commercial, and industrial clients.
                            </p>
                            <p className="mt-4 text-text-secondary">
                                Over the years, we have built a reputation for reliable engineering, prompt service, and cost-effective solar solutions. Our team of skilled professionals ensures end-to-end project execution—from design and installation to maintenance and support.
                            </p>
                            <p className="mt-4 text-text-secondary">
                                Driven by our mission to make clean energy accessible and affordable, we have successfully powered numerous homes, offices, and industries across Rajasthan and beyond. At MS Solar, we don't just install solar panels—we deliver long-term energy independence.
                            </p>
                        </div>
                    </section>

                    {/* Powering Change */}
                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                             <h2 className="text-3xl font-bold text-secondary">Powering Change With Solar</h2>
                             <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">We believe in driving positive change through sustainable energy. Here's how we are powering change with solar:</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 bg-surface rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-primary">Clean Energy</h3>
                                <p className="mt-2 text-text-secondary">We promote the use of eco-friendly solar power to reduce carbon footprint and fight climate change.</p>
                            </div>
                            <div className="p-8 bg-surface rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-primary">Energy Independence</h3>
                                <p className="mt-2 text-text-secondary">We empower homes, businesses, and industries to generate their own electricity and reduce dependency on the grid.</p>
                            </div>
                            <div className="p-8 bg-surface rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-primary">Affordable & Reliable</h3>
                                <p className="mt-2 text-text-secondary">Our customized solar systems help customers save on electricity bills while enjoying consistent power supply.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutPage;