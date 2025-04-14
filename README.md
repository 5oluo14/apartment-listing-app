# Apartment Listing Application

A full-stack application for listing, viewing, and adding apartments with search and filter functionality.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [API Documentation](#api-documentation)
- [Usage Guide](#usage-guide)
- [Development Notes](#development-notes)
- [Further Improvements](#further-improvements)

## Project Overview

This application provides a platform to manage and browse apartment listings. Users can view a list of apartments, see detailed information for individual apartments, and add new apartment listings. The application features a responsive design that works on both mobile and desktop devices.

## Features

- **Apartment Listing Page**: Browse all available apartments with preview information
- **Apartment Details Page**: View comprehensive details about a specific apartment
- **Add Apartment Functionality**: Create new apartment listings through the API
- **Search and Filter**: Find apartments by unit name, unit number, or project
- **Responsive Design**: Optimized UI for both mobile and web interfaces

## Technology Stack

### Backend
- Node.js with TypeScript
- Express.js for API routing
- MongoDB 4.4 for database

### Frontend
- Next.js with TypeScript
- React for UI components
- Tailwind CSS for styling

### DevOps
- Docker and Docker Compose for containerization
- Yarn for package management

## Project Structure

```
apartment-listing-app/
├── backend/                    # Backend Node.js application
│   ├── src/
│   │   ├── controllers/        # Request handlers
│   │   ├── models/             # Database models
│   │   ├── routes/             # API routes
│   │   ├── services/           # Business logic
│   │   ├── types/              # TypeScript type definitions
│   │   ├── utils/              # Utility functions
│   │   ├── app.ts              # Express application setup
│   │   └── server.ts           # Server entry point
│   ├── Dockerfile              # Docker configuration for backend
│   ├── package.json            # Node dependencies
│   └── tsconfig.json           # TypeScript configuration
├── frontend/                   # Frontend Next.js application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # Next.js pages
│   │   ├── styles/             # CSS styles
│   │   ├── types/              # TypeScript type definitions
│   │   └── utils/              # Utility functions
│   ├── Dockerfile              # Docker configuration for frontend
│   ├── package.json            # Node dependencies
│   └── tsconfig.json           # TypeScript configuration
├── .gitignore                  # Git ignore file
├── docker-compose.yml          # Docker Compose configuration
└── README.md                   # Project documentation
```

## Prerequisites

Before running this application, ensure you have the following installed:

- Docker and Docker Compose
- Git

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/apartment-listing-app.git
cd apartment-listing-app
```

### 2. Run with Docker Compose

The entire application (backend, frontend, and database) can be started with a single command:

```bash
docker-compose up
```

This will:
- Build the backend and frontend Docker images
- Start MongoDB 4.4 container
- Set up the necessary networks between containers
- Map the required ports to your local machine

### 3. Access the application

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000/api

### 4. Stopping the application

To stop the application, use:

```bash
docker-compose down
```

To remove volumes (database data) when stopping:

```bash
docker-compose down -v
```

## API Documentation

### Base URL

```
http://localhost:4000/api
```

### Endpoints

#### Get all apartments

```
GET /apartments
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d21b4667d0d8992e610c85",
      "unitName": "Test Name",
      "unitNumber": "A12",
      "project": "Nawy ",
      "price": 250000,
      "bedrooms": 4,
      "bathrooms": 2,
      "area": 120,
      "features": ["Balcony", "Swimming Pool"],
      "imageUrl": "https://example.com/image.jpg",
      "createdAt": "2023-04-14T10:00:00.000Z",
      "updatedAt": "2023-04-14T10:00:00.000Z"
    },
    // More apartments...
  ]
}
```

#### Get apartment by ID

```
GET /apartments/:id
```

Response:
```json
{
  "success": true,
  "data": {
    "_id": "60d21b4667d0d8992e610c85",
    "unitName": "Test Name",
    "unitNumber": "A12",
    "project": "Nawy",
    "price": 250000,
    "bedrooms": 2,
    "bathrooms": 2,
    "area": 120,
    "features": ["Balcony", "Swimming Pool"],
    "description": "A beautiful apartment with an ocean view...",
    "location": {
      "address": "Maadi, 9st",
      "city": "Cairo",
      "state": "CA",
      "zipCode": "90210"
    },
    "imageUrl": "https://example.com/image.jpg",
    "additionalImages": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ],
    "createdAt": "2023-04-14T10:00:00.000Z",
    "updatedAt": "2023-04-14T10:00:00.000Z"
  }
}
```

#### Add new apartment

```
POST /apartments
```

Request Body:
```json
{
  "unitName": "Mountain View",
  "unitNumber": "Nawy",
  "project": "Alpine Residences",
  "price": 320000,
  "bedrooms": 3,
  "bathrooms": 2,
  "area": 150,
  "features": ["Fireplace", "Garage", "Garden"],
  "description": "Spacious apartment with mountain views...",
  "location": {
    "address": "456 Mountain Road",
    "city": "Zayed",
    "state": "za",
    "zipCode": "80301"
  },
  "imageUrl": "https://example.com/mountain.jpg",
  "additionalImages": [
    "https://example.com/mountain1.jpg",
    "https://example.com/mountain2.jpg"
  ]
}
```

Response:
```json
{
  "success": true,
  "data": {
    "_id": "60d21b4667d0d8992e610c86",
    "unitName": "Mountain View",
    "unitNumber": "Nawy",
    "project": "Alpine Residences",
    "price": 320000,
    "bedrooms": 3,
    "bathrooms": 2,
    "area": 150,
    "features": ["Fireplace", "Garage", "Garden"],
    "description": "Spacious apartment with mountain views...",
    "location": {
      "address": "456 Mountain Road",
      "city": "Zayed",
      "state": "za",
      "zipCode": "80301"
    },
    "imageUrl": "https://example.com/mountain.jpg",
    "additionalImages": [
      "https://example.com/mountain1.jpg",
      "https://example.com/mountain2.jpg"
    ],
    "createdAt": "2023-04-14T11:00:00.000Z",
    "updatedAt": "2023-04-14T11:00:00.000Z"
  }
}
```

#### Search apartments

```
GET /apartments/search?query=Mountain&field=unitName
```

Parameters:
- `query`: Search term
- `field`: Field to search in (unitName, unitNumber, project)

Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d21b4667d0d8992e610c86",
      "unitName": "Mountain View",
      "unitNumber": "B22",
      "project": "Alpine Residences",
      "price": 320000,
      "bedrooms": 3,
      "bathrooms": 2,
      "area": 150,
      "features": ["Fireplace", "Garage", "Garden"],
      "imageUrl": "https://example.com/mountain.jpg",
      "createdAt": "2023-04-14T11:00:00.000Z",
      "updatedAt": "2023-04-14T11:00:00.000Z"
    }
    // More matching apartments...
  ]
}
```

## Usage Guide

### Apartment Listing Page

The home page displays all available apartments with basic information such as:
- Unit name and number
- Project name
- Price
- Number of bedrooms and bathrooms
- Preview image

You can search for apartments using the search bar at the top of the page. Filter by:
- Unit name
- Unit number
- Project name

### Apartment Details Page

Click on any apartment card to view detailed information about that apartment, including:
- All basic information
- Full description
- Complete address
- All apartment features
- Additional images
- Floor area in square meters

### Adding a New Apartment (API Only)

New apartments can be added through the API endpoint. See the API documentation for details on the required format.

## Development Notes

### Database Schema

The MongoDB schema for apartments includes:

```typescript
interface Apartment {
  unitName: string;
  unitNumber: string;
  project: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: string[];
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  imageUrl: string;
  additionalImages?: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Environment Variables

The application uses the following environment variables (already configured in docker-compose.yml):

- `MONGODB_URI`: MongoDB connection string
- `PORT`: Backend server port
- `NODE_ENV`: Environment (development/production)
- `NEXT_PUBLIC_API_URL`: URL for the backend API (used by frontend)

## Further Improvements

Potential enhancements for future versions:

- User authentication and authorization
- Admin panel for managing apartments
- Advanced filtering options (price range, bedrooms, etc.)
- Interactive map view for apartment locations
- Saving favorite apartments
- Contact forms for inquiries
- Image upload functionality
- Unit testing and integration testing
- CI/CD pipeline setup
