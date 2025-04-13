import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { Apartment } from '../types/apartment';

interface ApartmentCardProps {
    apartment: Apartment;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48 w-full">
                <Image
                    src={apartment.images[0] || 'https://via.placeholder.com/400x300?text=No+Image+Available'}
                    alt={apartment.unitName}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity hover:opacity-90"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{apartment.unitName}</h3>
                <p className="text-gray-600 text-sm mb-2">
                    Unit {apartment.unitNumber} | {apartment.project}
                </p>
                <p className="text-blue-600 font-bold text-xl mb-3">${apartment.price.toLocaleString()}</p>

                <div className="flex justify-between text-gray-500 mb-4">
                    <div className="flex items-center">
                        <FaBed className="mr-1" />
                        <span>{apartment.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                        <FaBath className="mr-1" />
                        <span>{apartment.bathrooms}</span>
                    </div>
                    <div className="flex items-center">
                        <FaRulerCombined className="mr-1" />
                        <span>{apartment.area} m²</span>
                    </div>
                </div>

                <Link
                    href={`/apartments/${apartment._id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};