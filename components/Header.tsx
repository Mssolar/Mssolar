
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SHOWCASE_NAV_LINKS } from '../constants';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    const location = useLocation();
    const currentLink = SHOWCASE_NAV_LINKS.find(link => location.pathname === link.path);
    const title = currentLink ? currentLink.name : "Gemini Showcase";

    return (
        <header className="p-6 border-b border-border bg-surface flex items-center justify-between">
            <h1 className="text-2xl font-bold text-text-primary">{title}</h1>
             <button
                onClick={onMenuClick}
                className="md:hidden text-secondary focus:outline-none p-2"
                aria-label="Open navigation menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
