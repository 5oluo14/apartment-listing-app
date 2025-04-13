export interface Apartment {
    _id: string;
    unitName: string;
    unitNumber: string;
    project: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    description: string;
    location: string;
    amenities: string[];
    images: string[];
    createdAt: string;
    updatedAt: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    pagination?: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
    error?: string | string[];
}