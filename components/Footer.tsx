
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO, APP_VERSION } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                             <Link to="/" className="inline-block mb-4">
                                <img src="https://ik.imagekit.io/mssolar/LOGO.jpeg?updatedAt=1754745863113" alt="MS Solar Powercorp Logo" className="h-16" />
                            </Link>
                            <p className="text-gray-400 max-w-md">Your trusted partner in delivering smart, sustainable, and cost-effective solar solutions across India.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                            <address className="not-italic text-gray-400 space-y-2">
                                <p>{CONTACT_INFO.address}</p>
                                <p>
                                    {CONTACT_INFO.phones.slice(0, 2).map((phone, index) => (
                                        <React.Fragment key={phone.number}>
                                            <a href={`tel:${phone.number}`} className="hover:text-white">{phone.display}</a>
                                            {index < 1 && ', '}
                                        </React.Fragment>
                                    ))}
                                </p>
                                <p>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
                                </p>
                                <p>
                                    <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">mssolar.in</a>
                                </p>
                            </address>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-2 gap-8 md:pt-2">
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {NAV_LINKS.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Solar Panel Installation</li>
                                <li>System Maintenance</li>
                                <li>Battery Storage</li>
                                <li>Solar Water Pumps</li>
                                <li>Solar Lighting</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MS Solar Powercorp Pvt. Ltd. All Rights Reserved. | v{APP_VERSION}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;