'use client';

import { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import { ApartmentCard } from '../../components/ApartmentCard';
import { SearchBar } from '../../components/SearchBar';
import { Pagination } from '../../components/Pagination';
import { getApartments } from '../../lib/api';
import { Apartment } from '../../types/apartment';

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchApartments = async () => {
        try {
            setLoading(true);
            const response = await getApartments(searchQuery, currentPage);
            setApartments(response.data);
            setTotalPages(response.pagination?.pages || 1);
            setError(null);
        } catch (err) {
            setError('Failed to fetch apartments. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApartments();
    }, [searchQuery, currentPage]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <Layout title="Apartments | Apartment Finder">
            <h1 className="text-3xl font-bold mb-6">Available Apartments</h1>

            <SearchBar onSearch={handleSearch} initialValue={searchQuery} />

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            ) : error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            ) : apartments.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No apartments found. Try a different search query.</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {apartments.map((apartment) => (
                            <ApartmentCard key={apartment._id} apartment={apartment} />
                        ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </Layout>
    );
}