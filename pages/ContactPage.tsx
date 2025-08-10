
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import type { QuoteFormData } from '../types';
import { submitToGoogleSheet } from '../services/googleSheetService';
import Spinner from '../components/Spinner';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({ name: '', email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        await submitToGoogleSheet(formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <>
            <PageHeader title="Contact Us" subtitle="Let's Power The Future Together! We're here to deliver smart, sustainable solar solutions that make a difference." />

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="md:col-span-3 bg-surface p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h2>
                            {isSubmitted ? (
                                <div className="p-4 rounded-md h-full flex flex-col items-center justify-center text-center bg-primary/10">
                                    <div className="bg-primary p-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-xl font-semibold text-primary mt-4">Thank you for your message!</p>
                                    <p className="text-text-secondary mt-1">We will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Full Name</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary">Email Address</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">Phone Number</label>
                                        <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-text-secondary">Additional Comments</label>
                                        <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Please provide any additional comments or specific requirements." className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:bg-gray-500 disabled:cursor-not-allowed">
                                            {isSubmitting ? <Spinner /> : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                        {/* Contact Info */}
                        <div className="md:col-span-2">
                           <div className="bg-surface p-8 rounded-lg shadow-lg h-full">
                               <h3 className="text-xl font-bold text-secondary mb-4">Contact Information</h3>
                               <address className="not-italic text-text-secondary space-y-4">
                                   <div>
                                       <p className="font-semibold text-text-primary">Address</p>
                                       <p>{CONTACT_INFO.address}</p>
                                   </div>
                                    <div>
                                       <p className="font-semibold text-text-primary">Phone</p>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                            {CONTACT_INFO.phones.map(phone => (
                                                <a key={phone.number} href={`tel:${phone.number}`} className="hover:text-primary">{phone.display}</a>
                                            ))}
                                        </div>
                                   </div>
                                    <div>
                                       <p className="font-semibold text-text-primary">Email</p>
                                       <p><a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline">{CONTACT_INFO.email}</a></p>
                                   </div>
                                   <div>
                                       <p className="font-semibold text-text-primary">Website</p>
                                       <p><a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{CONTACT_INFO.website}</a></p>
                                   </div>
                               </address>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
