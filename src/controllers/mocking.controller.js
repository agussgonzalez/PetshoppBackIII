import { usersService } from '../services/index.js'; 
import { petsService } from '../services/index.js';
import { createHash } from '../utils/index.js';
import { faker } from '@faker-js/faker';

// Controlador para generar usuarios de forma mock
const generateMockingUsers = async (req, res) => {
  try {
    const users = await Promise.all(
      Array.from({ length: 50 }, async () => {
        const password = await createHash('coder123');
        return {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          password: password,
          role: Math.random() > 0.5 ? 'user' : 'admin',
          pets: []
        };
      })
    );

    // Guardamos los usuarios en la base de datos
    await usersService.createUsers(users); 
    res.status(200).json(users); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar usuarios mock' });
  }
};

// Controlador para generar datos de usuarios y mascotas
const generateData = async (req, res) => {
  try {
    const { users, pets } = req.body;

    if (!users || !pets) {
      return res.status(400).json({ error: 'Faltan usuarios o mascotas en el cuerpo de la solicitud' });
    }

    const generatedUsers = await Promise.all(
      Array.from({ length: users }, async () => {
        const password = await createHash('coder123');
        return {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          password: password,
          role: Math.random() > 0.5 ? 'user' : 'admin',
          pets: []
        };
      })
    );

    const generatedPets = Array.from({ length: pets }, () => ({
      name: faker.animal.type(), // Cambiar si `dog` no está disponible
      age: faker.datatype.number({ min: 1, max: 15 }),
      type: 'dog',
      adopted: false
    }));

    // Insertar los usuarios y mascotas en la base de datos
    await usersService.createUsers(generatedUsers);
    await petsService.createPets(generatedPets);

    res.status(200).json({ users: generatedUsers, pets: generatedPets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar datos' });
  }
};

// Endpoint para generar mascotas mock
const mockingPets = (req, res) => {
  try {
    const pets = Array.from({ length: 50 }, () => ({
      name: faker.animal.type(),
      age: faker.datatype.number({ min: 1, max: 15 }),
      type: 'dog',
      adopted: false
    }));
    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar mascotas mock' });
  }
};

export default { generateMockingUsers, generateData, mockingPets };
