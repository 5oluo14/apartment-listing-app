import axios from 'axios';
import { Apartment, ApiResponse } from '../types/apartment';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getApartments = async (search?: string, page = 1, limit = 10): Promise<ApiResponse<Apartment[]>> => {
    try {
        let url = `/apartments?page=${page}&limit=${limit}`;
        if (search) {
            url += `&search=${encodeURIComponent(search)}`;
        }

        const response = await api.get<ApiResponse<Apartment[]>>(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching apartments:', error);
        throw error;
    }
};

export const getApartmentById = async (id: string): Promise<ApiResponse<Apartment>> => {
    try {
        const response = await api.get<ApiResponse<Apartment>>(`/apartments/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching apartment with id ${id}:`, error);
        throw error;
    }
};

export const addApartment = async (apartment: Omit<Apartment, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Apartment>> => {
    try {
        const response = await api.post<ApiResponse<Apartment>>('/apartments', apartment);
        return response.data;
    } catch (error) {
        console.error('Error adding apartment:', error);
        throw error;
    }
};