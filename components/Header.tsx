
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SHOWCASE_NAV_LINKS } from '../constants';

const Header: React.FC = () => {
    const location = useLocation();
    const currentLink = SHOWCASE_NAV_LINKS.find(link => location.pathname === link.path);
    const title = currentLink ? currentLink.name : "Gemini Showcase";

    return (
        <header className="p-6 border-b border-border bg-surface">
            <h1 className="text-2xl font-bold text-text-primary">{title}</h1>
        </header>
    );
};

export default Header;
