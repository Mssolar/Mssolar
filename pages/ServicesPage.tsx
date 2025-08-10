
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { serviceInfoList } from '../data/servicesData';
import type { ServiceInfo } from '../data/servicesData';

const ServiceCard: React.FC<{ service: ServiceInfo }> = ({ service }) => (
    <Link to={`/services/${service.slug}`} className="flex flex-col text-center group bg-surface rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <div className="p-8 flex-1 flex flex-col">
            <div className="text-primary mb-5 w-16 h-16 mx-auto flex items-center justify-center">{service.icon}</div>
            <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
            <p className="text-text-secondary flex-1 mb-6">{service.excerpt}</p>
            <div className="mt-auto">
                <span className="font-bold text-accent group-hover:underline">Learn More &rarr;</span>
            </div>
        </div>
    </Link>
);


const ServicesPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Our Services" subtitle="End-to-end solutions for all your solar energy needs." />
            
            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-secondary">A Solution for Every Need</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
                            Whether you're a homeowner, a business owner, or in agriculture, we have a tailored solar solution to help you save money and embrace clean energy. Explore our offerings to find the perfect fit.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {serviceInfoList.map(service => <ServiceCard key={service.slug} service={service} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
