
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SHOWCASE_NAV_LINKS } from '../constants';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-surface text-text-primary flex-col p-4 border-r border-border hidden md:flex">
            <div className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75v13.5a.75.75 0 01-1.5 0V5.25A.75.75 0 019 4.5zm5.803 8.35a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0zM3.497 9.553a.75.75 0 010 1.06l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72a.75.75 0 011.06 0zm1.72 1.72a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                <span>Gemini Showcase</span>
            </div>
            <nav>
                <ul>
                    {SHOWCASE_NAV_LINKS.map(({ name, path }) => (
                        <li key={name}>
                            <NavLink
                                to={path}
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
    );
};

export default Sidebar;
