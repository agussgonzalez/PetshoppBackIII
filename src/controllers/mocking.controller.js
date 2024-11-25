import { usersService } from '../services/index.js'; 
import { petsService } from '../services/index.js';
import { createHash } from '../utils/index.js';
import { faker } from '@faker-js/faker';


// Controlador para generar los usuarios de forma mock
const generateMockingUsers = async (req, res) => {
  try {
    const users = [];
    for (let i = 0; i < 50; i++) {
      const password = await createHash('coder123');
      const role = Math.random() > 0.5 ? 'user' : 'admin'; // Random role
      const user = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: password,
        role: role,
        pets: []
      };
      users.push(user);
    }
    // Guardamos los usuarios en la base de datos
    await usersService.createUsers(users); 
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({ error: 'Error al generar usuarios mock' });
  }
};

// Controlador para generar los datos de usuarios y mascotas
const generateData = async (req, res) => {
  try {
    const { users, pets } = req.body;
    const generatedUsers = [];
    const generatedPets = [];

    // Generar usuarios
    for (let i = 0; i < users; i++) {
      const password = await createHash('coder123');
      const role = Math.random() > 0.5 ? 'user' : 'admin';
      const user = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        password: password,
        role: role,
        pets: []
      };
      generatedUsers.push(user);
    }

    // Generar mascotas
    for (let i = 0; i < pets; i++) {
      const pet = {
        name: faker.animal.dog(),
        age: faker.random.number({ min: 1, max: 15 }),
        type: 'dog',
        adopted: false
      };
      generatedPets.push(pet);
    }

    // Insertar los usuarios y mascotas en la base de datos
    await usersService.createUsers(generatedUsers);
    await petsService.createPets(generatedPets);

    res.status(200).json({ users: generatedUsers, pets: generatedPets });
  } catch (error) {
    res.status(500).json({ error: 'Error al generar datos' });
  }
};

// Endpoint para generar mascotas mock
const mockingPets = (req, res) => {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    const pet = {
      name: faker.animal.dog(),
      age: faker.random.number({ min: 1, max: 15 }),
      type: 'dog',
      adopted: false
    };
    pets.push(pet);
  }
  res.status(200).json(pets);
};

export default { generateMockingUsers, generateData, mockingPets };