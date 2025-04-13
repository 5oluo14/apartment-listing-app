import { Request, Response } from 'express';
import Apartment, { IApartment } from '../models/apartment.model';


export const getApartments = async (req: Request, res: Response): Promise<void> => {
  try {
    const { search, page = '1', limit = '10' } = req.query;
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);
    const skip = (pageNumber - 1) * limitNumber;

    let query = {};

    if (search) {
      query = { $text: { $search: search as string } };
    }

    const apartments = await Apartment.find(query)
      .skip(skip)
      .limit(limitNumber)
      .sort({ createdAt: -1 });

    const total = await Apartment.countDocuments(query);

    res.status(200).json({
      success: true,
      data: apartments,
      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        pages: Math.ceil(total / limitNumber),
      },
    });
  } catch (err) {
    console.error('Error fetching apartments:', err);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get single apartment by ID
export const getApartmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartment = await Apartment.findById(req.params.id);

    if (!apartment) {
      res.status(404).json({
        success: false,
        error: 'Apartment not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: apartment,
    });
  } catch (err) {
    console.error('Error fetching apartment:', err);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Add new apartment
export const addApartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const apartment = await Apartment.create(req.body);

    res.status(201).json({
      success: true,
      data: apartment,
    });
  } catch (err) {
    console.error('Error adding apartment:', err);

    if ((err as any).name === 'ValidationError') {
      const messages = Object.values((err as any).errors).map((val: any) => val.message);

      res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};