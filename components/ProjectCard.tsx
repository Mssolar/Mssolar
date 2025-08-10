import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        if (project.images && project.images.length > 1) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(intervalId);
        }
    }, [project.images]);

    return (
        <div className="bg-surface rounded-lg shadow-lg overflow-hidden group">
            <div className="relative overflow-hidden h-64">
                {project.images && project.images.length > 0 ? (
                    project.images.map((img, index) => (
                         <img 
                            key={img}
                            src={img} 
                            alt={`Solar project at ${project.name}`} 
                            className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-text-secondary">Image Not Available</span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <p className="text-sm font-semibold text-accent uppercase tracking-wide">{project.category}</p>
                <h3 className="text-xl font-bold text-secondary mt-1">{project.name}</h3>
                <p className="text-text-secondary mt-1">{project.detail}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
