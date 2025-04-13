"use client";  // Add this at the top

import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title = 'Apartment Listing App' }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
            <Footer />
        </div>
    );
};