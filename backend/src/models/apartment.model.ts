import mongoose, { Schema, Document } from 'mongoose';

export interface IApartment extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const ApartmentSchema: Schema = new Schema(
  {
    unitName: { type: String, required: true, trim: true },
    unitNumber: { type: String, required: true, trim: true },
    project: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    area: { type: Number, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    amenities: { type: [String], default: [] },
    images: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);


ApartmentSchema.index({ unitName: 'text', unitNumber: 'text', project: 'text' });

export default mongoose.model<IApartment>('Apartment', ApartmentSchema);