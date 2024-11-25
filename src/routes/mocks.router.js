import { Router } from 'express';
import mockingController from '../controllers/mocking.controller.js';

const router = Router();

// Endpoint que genera 50 usuarios con el formato especificado
router.get('/mockingusers', mockingController.generateMockingUsers);

// Endpoint que genera los datos especificados (usuarios y mascotas)
router.post('/generateData', mockingController.generateData);

// Mover el endpoint de mockingpets aquí
router.get('/mockingpets', mockingController.mockingPets);

export default router;
