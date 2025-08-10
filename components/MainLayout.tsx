
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuotePopup from './QuotePopup';

interface MainLayoutProps {
    onGetQuoteClick: () => void;
    isQuotePopupOpen: boolean;
    handleCloseQuotePopup: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onGetQuoteClick, isQuotePopupOpen, handleCloseQuotePopup }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Navbar onGetQuoteClick={onGetQuoteClick} />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            {isQuotePopupOpen && <QuotePopup onClose={handleCloseQuotePopup} />}
        </div>
    );
};

export default MainLayout;
