
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SHOWCASE_NAV_LINKS } from '../constants';

interface MobileShowcaseNavProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileShowcaseNav: React.FC<MobileShowcaseNavProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-surface text-text-primary flex flex-col p-4 border-r border-border z-50 transform transition-transform md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 id="mobile-menu-title" className="text-xl font-bold text-primary flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75v13.5a.75.75 0 01-1.5 0V5.25A.75.75 0 019 4.5zm5.803 8.35a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0zM3.497 9.553a.75.75 0 010 1.06l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72a.75.75 0 011.06 0zm1.72 1.72a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                        <span>Gemini Showcase</span>
                    </h2>
                    <button onClick={onClose} className="text-text-secondary hover:text-text-primary" aria-label="Close menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul>
                        {SHOWCASE_NAV_LINKS.map(({ name, path }) => (
                            <li key={name}>
                                <NavLink
                                    to={path}
                                    onClick={onClose} // Close menu on navigation
                                    className={({ isActive }) =>
                                        `flex items-center gap-4 p-3 my-1 rounded-lg transition-colors duration-200 ${
                                            isActive
                                                ? 'bg-primary text-white shadow-md'
                                                : 'text-text-secondary hover:bg-background hover:text-text-primary'
                                        }`
                                    }
                                >
                                    <span className="font-medium">{name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default MobileShowcaseNav;
