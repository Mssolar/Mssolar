
import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    title: string;
    description: string;
    linkTo: string;
    icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, linkTo, icon }) => {
    return (
        <Link to={linkTo} className="block group">
            <div className="bg-surface p-6 rounded-lg border border-border h-full
                            transform transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary group-hover:animate-pulse">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{title}</h3>
                </div>
                <p className="text-text-secondary">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default Card;
