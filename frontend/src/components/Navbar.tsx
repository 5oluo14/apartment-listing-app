"use client";  // Add this at the top

import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Change this from next/router
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();  // Use usePathname instead of useRouter().pathname

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white text-2xl font-bold">
                            ApartmentFinder
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link href="/" className={`${pathname === '/' ? 'bg-blue-700' : 'hover:bg-blue-500'
                                } text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                Home
                            </Link>
                            <Link href="/apartments" className={`${pathname.startsWith('/apartments') ? 'bg-blue-700' : 'hover:bg-blue-500'
                                } text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                Apartments
                            </Link>
                            <Link href="/about" className={`${pathname === '/about' ? 'bg-blue-700' : 'hover:bg-blue-500'
                                } text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                About
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className={`${pathname === '/' ? 'bg-blue-700' : 'hover:bg-blue-500'
                            } text-white block px-3 py-2 rounded-md text-base font-medium`}
                            onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link href="/apartments" className={`${pathname.startsWith('/apartments') ? 'bg-blue-700' : 'hover:bg-blue-500'
                            } text-white block px-3 py-2 rounded-md text-base font-medium`}
                            onClick={toggleMenu}>
                            Apartments
                        </Link>
                        <Link href="/about" className={`${pathname === '/about' ? 'bg-blue-700' : 'hover:bg-blue-500'
                            } text-white block px-3 py-2 rounded-md text-base font-medium`}
                            onClick={toggleMenu}>
                            About
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};