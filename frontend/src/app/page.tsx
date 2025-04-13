import Link from 'next/link';
import { Layout } from '../components/Layout';

export default function Home() {
    return (
        <Layout title="Home | Apartment Finder">
            <section className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Apartment</h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Browse through our curated selection of premium apartments in top locations.
                </p>
                <Link
                    href="/apartments"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Browse Apartments
                </Link>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Wide Selection</h2>
                    <p className="text-gray-600">
                        Explore a variety of apartments with different sizes, layouts, and amenities to suit your needs.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Prime Locations</h2>
                    <p className="text-gray-600">
                        Find apartments in the most sought-after neighborhoods with easy access to transportation and amenities.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Detailed Information</h2>
                    <p className="text-gray-600">
                        Get comprehensive details about each apartment, including floor plans, pricing, and available features.
                    </p>
                </div>
            </section>
        </Layout>
    );
}