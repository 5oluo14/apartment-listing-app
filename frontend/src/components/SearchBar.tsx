import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    onSearch: (query: string) => void;
    initialValue?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialValue = '' }) => {
    const [query, setQuery] = useState(initialValue);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    useEffect(() => {
        onSearch(query);
    }, [query]);

    return (
        <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto mb-8">
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search by unit name, number, or project..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="absolute right-3 text-gray-500 hover:text-blue-600"
                    aria-label="Search"
                >
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
};
