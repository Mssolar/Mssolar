import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import type { Project } from '../types';

const stats = [
    { value: '2,000+', label: 'Solar Installations' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '25+ MW', label: 'Total Installed Capacity' },
    { value: '2,500+', label: 'Solar Water Pumps Deployed' },
];

const projects: Project[] = [
    { 
        name: 'Khushi Ki Dhani', 
        detail: '80 kW', 
        category: 'Hospitality',
        images: [
            'https://ik.imagekit.io/mssolar/WhatsApp%20Image%202025-08-06%20at%202.49.17%20PM.jpeg?updatedAt=1754472109931',
            'https://ik.imagekit.io/mssolar/WhatsApp%20Image%202025-08-06%20at%202.49.17%20PM%20(1).jpeg?updatedAt=1754472109947'
        ]
    },
    { name: 'Apna Ghar Ashram, Bharatpur', detail: '240 kW', category: 'Institutional', images: ['https://ik.imagekit.io/mssolar/apna%20ghar.jpeg?updatedAt=1754472109869'] },
    { name: 'Balaji Hotel, Tonk Road', detail: '120 kW', category: 'Hospitality', images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070'] },
    { name: 'Maya Hotel, Jaipur', detail: '100 kW', category: 'Hospitality', images: ['https://images.unsplash.com/photo-1542314831-068cd1dbb5eb?q=80&w=2070'] },
    { 
        name: 'B R Industries, Bikaner', 
        detail: '200 kW', 
        category: 'Industrial', 
        images: [
            'https://ik.imagekit.io/mssolar/bikaner.jpeg?updatedAt=1754472110004',
            'https://ik.imagekit.io/mssolar/bikaner%20200.jpeg?updatedAt=1754472109907',
            'https://ik.imagekit.io/mssolar/bikaner%202.jpeg?updatedAt=1754472110001'
        ] 
    },
    { name: 'Ronak Sales, VKI', detail: '160 kW', category: 'Industrial', images: ['https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232'] },
    { name: 'Pushkar Heritage', detail: '50 kW', category: 'Hospitality', images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949'] },
];

const ProjectsPage: React.FC = () => {
    return (
        <>
            <PageHeader title="Our Achievements" subtitle="Successfully delivering high-impact solar solutions across various sectors." />

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Stats Section */}
                    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map(stat => (
                            <div key={stat.label} className="bg-surface p-6 rounded-lg shadow-lg">
                                <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
                                <p className="mt-2 text-sm font-medium text-text-secondary uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </section>

                    {/* Projects Showcase */}
                    <section className="mt-16 sm:mt-24">
                        <div className="text-center">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">Our Portfolio</h2>
                            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary">
                                We take pride in our work. Here are some of the projects we've delivered across various sectors.
                            </p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map(project => (
                                <ProjectCard key={project.name} project={project} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;