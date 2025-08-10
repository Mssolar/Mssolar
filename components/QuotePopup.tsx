
import React, { useState } from 'react';
import type { QuoteFormData } from '../types';
import { submitToGoogleSheet } from '../services/googleSheetService';
import Spinner from './Spinner';

interface QuotePopupProps {
    onClose: () => void;
}

const QuotePopup: React.FC<QuotePopupProps> = ({ onClose }) => {
    const [formData, setFormData] = useState<QuoteFormData>({ name: '', phone: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex justify-center items-center p-4" aria-modal="true" role="dialog" aria-labelledby="quote-popup-title">
            <div className="bg-surface rounded-lg shadow-2xl p-8 w-full max-w-lg relative animate-fade-in-up max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors" aria-label="Close modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <h2 id="quote-popup-title" className="text-3xl font-bold text-secondary mb-2">Request a Free Quote</h2>
                <p className="text-text-secondary mb-6">Fill out the form below and we'll get back to you shortly.</p>

                {isSubmitted ? (
                    <div className="text-center py-10 flex flex-col items-center">
                        <div className="bg-primary p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-xl font-semibold text-primary mt-4">Thank You!</p>
                        <p className="text-text-secondary mt-1">Your quote request has been submitted successfully.</p>
                         <button onClick={onClose} className="mt-6 px-6 py-2 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors duration-300">
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="popup-name" className="sr-only">Name</label>
                            <input type="text" name="name" id="popup-name" required value={formData.name} onChange={handleChange} placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                        </div>
                         <div>
                            <label htmlFor="popup-phone" className="sr-only">Phone Number</label>
                            <input type="tel" name="phone" id="popup-phone" required value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                        </div>
                        <div>
                            <label htmlFor="popup-email" className="sr-only">Email Address</label>
                            <input type="email" name="email" id="popup-email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                        </div>
                        <div>
                            <label htmlFor="popup-message" className="sr-only">Additional Comments</label>
                            <textarea name="message" id="popup-message" rows={3} required value={formData.message} onChange={handleChange} placeholder="Additional Comments" className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-accent hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all disabled:bg-gray-500 disabled:cursor-not-allowed">
                            {isSubmitting ? <Spinner /> : 'Get My Free Quote'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuotePopup;
