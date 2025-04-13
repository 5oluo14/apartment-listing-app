import { Router } from 'express';
import { 
  getApartments, 
  getApartmentById, 
  addApartment 
} from '../controllers/apartment.controller';

const router = Router();

router.get('/', getApartments);

router.get('/:id', getApartmentById);

router.post('/', addApartment);

export default router;
