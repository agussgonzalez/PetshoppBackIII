import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";

// Cargar variables de entorno antes de usarlas
dotenv.config();

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Configurar conexión a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB', error);
        process.exit(1); // Salir del proceso en caso de error
    }
};

// Conectar a la base de datos
connectDB();

app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

// Iniciar el servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
