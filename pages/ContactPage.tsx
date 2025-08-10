import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import type { QuoteFormData } from '../types';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<QuoteFormData>({ name: '', email: '', phone: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a placeholder for form submission logic.
        // It now just shows a success message without sending data.
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
                                <div className="p-4 rounded-md h-full flex items-center justify-center text-center bg-primary/10 text-primary">
                                    <p className="text-lg">Thank you for your message! We will get back to you soon.</p>
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
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
                                            Submit
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
                                       <p>p. no. 17, mansarover, jaipur, Rajasthan</p>
                                   </div>
                                    <div>
                                       <p className="font-semibold text-text-primary">Phone</p>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                            <a href="tel:9057161333" className="hover:text-primary">9057161333</a>
                                            <a href="tel:9119377752" className="hover:text-primary">9119377752</a>
                                            <a href="tel:9755562085" className="hover:text-primary">9755562085</a>
                                            <a href="tel:8947816106" className="hover:text-primary">8947816106</a>
                                        </div>
                                   </div>
                                    <div>
                                       <p className="font-semibold text-text-primary">Email</p>
                                       <p><a href="mailto:contact@mssolar.in" className="text-primary hover:underline">contact@mssolar.in</a></p>
                                   </div>
                                   <div>
                                       <p className="font-semibold text-text-primary">Website</p>
                                       <p><a href="https://mssolar.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mssolar.in</a></p>
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