
import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

// Use direct URL for the logo
const logoUrl = 'https://ik.imagekit.io/mssolar/LOGO.jpeg?updatedAt=1754745863113';

const Logo = () => (
    <Link to="/" className="flex items-center">
        <img src={logoUrl} alt="MS Solar Powercorp Logo" className="h-12 md:h-14" />
    </Link>
);

interface NavbarProps {
    onGetQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onGetQuoteClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // These are navigation sections that have child pages.
    const sectionParents = ['/services', '/blog'];

    const linkClasses = "text-text-primary hover:text-primary transition-colors duration-300 font-medium";
    const activeLinkClasses = "text-primary";

    return (
        <header className="bg-surface sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-8">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => {
                                        // Make parent links active for their child routes.
                                        const isParentActive = sectionParents.some(parent => location.pathname.startsWith(parent) && link.path === parent);
                                        return `${linkClasses} ${isActive || isParentActive ? activeLinkClasses : ''}`;
                                    }}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        <button
                            onClick={onGetQuoteClick}
                            className="px-5 py-2 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-all duration-300 text-sm"
                        >
                            Get a Quote
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-secondary focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-surface pb-4">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-2">
                        <nav className="flex flex-col space-y-2">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => {
                                        const isParentActive = sectionParents.some(parent => location.pathname.startsWith(parent) && link.path === parent);
                                        return `text-center py-2 rounded-md ${linkClasses} ${isActive || isParentActive ? activeLinkClasses : ''}`;
                                    }}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="mt-4 pt-4 border-t border-border">
                            <button
                                onClick={() => {
                                    onGetQuoteClick();
                                    setIsOpen(false);
                                }}
                                className="w-full px-5 py-3 bg-accent text-secondary font-bold rounded-full hover:opacity-90 transition-all duration-300"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;