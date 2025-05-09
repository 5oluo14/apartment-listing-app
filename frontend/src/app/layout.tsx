import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Apartment Finder',
    description: 'Find your perfect apartment in prime locations',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}