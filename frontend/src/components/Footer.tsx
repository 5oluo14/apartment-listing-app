"use client";

import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-lg font-bold">ApartmentFinder</p>
                        <p className="text-sm text-gray-300">Find your perfect home</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} ApartmentFinder. All rights reserved.
                </div>
            </div>
        </footer>
    );
};