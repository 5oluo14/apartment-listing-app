'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { Layout } from '../../../components/Layout';
import { getApartmentById } from '../../../lib/api';
import { Apartment } from '../../../types/apartment';

export default function ApartmentDetailPage() {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [apartment, setApartment] = useState<Apartment | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState(0);

    const apartmentImages = ['/apartments/apartment1.jpg', '/apartments/apartment2.jpg'];
    useEffect(() => {
        const fetchApartment = async () => {
            try {
                setLoading(true);
                const response = await getApartmentById(id);
                setApartment(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch apartment details. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchApartment();
        }
    }, [id]);

    if (loading) {
        return (
            <Layout title="Loading... | Apartment Finder">
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </Layout>
        );
    }

    if (error || !apartment) {
        return (
            <Layout title="Error | Apartment Finder">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error || 'Apartment not found'}
                </div>
                <div className="mt-4">
                    <Link href="/apartments" className="inline-flex items-center text-blue-600 hover:underline">
                        <FaArrowLeft className="mr-2" /> Back to apartments
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={`${apartment.unitName} | Apartment Finder`}>
            <div className="mb-4">
                <Link href="/apartments" className="inline-flex items-center text-blue-600 hover:underline">
                    <FaArrowLeft className="mr-2" /> Back to apartments
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    {/* Image Gallery */}
                    <div className="md:w-1/2">
                        <div className="relative h-80 w-full">
                            <Image
                                src={apartmentImages[activeImage]}
                                alt={`${apartment.unitName} - Image ${activeImage + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                            />
                        </div>

                        {apartmentImages.length > 1 && (
                            <div className="flex overflow-x-auto p-2 space-x-2">
                                {apartmentImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`relative h-16 w-16 flex-shrink-0 ${activeImage === index ? 'ring-2 ring-blue-600' : ''
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Apartment Details */}
                    <div className="md:w-1/2 p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold mb-2">{apartment.unitName}</h1>
                                <p className="text-gray-600 mb-2">Unit {apartment.unitNumber} | {apartment.project}</p>
                            </div>
                            <p className="text-blue-600 font-bold text-2xl">${apartment.price.toLocaleString()}</p>
                        </div>

                        <div className="flex justify-between py-4 border-b border-gray-200">
                            <div className="flex items-center">
                                <FaBed className="mr-2 text-gray-500" />
                                <div>
                                    <p className="font-bold">{apartment.bedrooms}</p>
                                    <p className="text-sm text-gray-500">Bedrooms</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaBath className="mr-2 text-gray-500" />
                                <div>
                                    <p className="font-bold">{apartment.bathrooms}</p>
                                    <p className="text-sm text-gray-500">Bathrooms</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaRulerCombined className="mr-2 text-gray-500" />
                                <div>
                                    <p className="font-bold">{apartment.area}</p>
                                    <p className="text-sm text-gray-500">m²</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-4 border-b border-gray-200">
                            <div className="flex items-start mb-3">
                                <FaMapMarkerAlt className="mt-1 mr-2 text-gray-500" />
                                <p>{apartment.location}</p>
                            </div>
                        </div>

                        <div className="py-4">
                            <h2 className="font-bold text-lg mb-2">Description</h2>
                            <p className="text-gray-700">{apartment.description}</p>
                        </div>

                        {apartment.amenities.length > 0 && (
                            <div className="py-4 border-t border-gray-200">
                                <h2 className="font-bold text-lg mb-2">Amenities</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {apartment.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-6">
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}