# **AdoptMe - Sistema de Gestión de Adopciones de Mascotas 🐾**

---

## **Descripción del Proyecto**
AdoptMe es una plataforma diseñada para facilitar la adopción responsable de mascotas. Permite a los usuarios registrarse, buscar mascotas disponibles y enviar solicitudes de adopción. El sistema cuenta con un backend robusto construido con Node.js, Express y MongoDB, que gestiona usuarios, mascotas y solicitudes de adopción de manera eficiente.

---

## **Características Principales**
- **Gestión de Usuarios:**
  - Registro y autenticación de usuarios.
  - Distinción entre roles (administradores y usuarios normales).
  - CRUD completo para usuarios.
  
- **Gestión de Mascotas:**
  - Registro de mascotas disponibles para adopción.
  - Visualización de mascotas con detalles como nombre, especie y edad.
  - Actualización o eliminación de mascotas por administradores.
  
- **Solicitudes de Adopción:**
  - Los usuarios pueden enviar solicitudes para adoptar una mascota.
  - Los administradores pueden gestionar el estado de las solicitudes (aprobadas o rechazadas).

- **Simulación con Datos Falsos:**
  - Generación de datos de prueba con la ruta de mocks.

---

## **Requisitos Previos**
Antes de iniciar el proyecto, asegúrate de tener instalado:
- **Node.js** (v20.18.0 o superior)
- **npm** (v7 o superior)
- **MongoDB** (una instancia local o Atlas)

---

## **Configuración del Proyecto**

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/adoptme.git
   cd adoptme

## Instalar Dependencias:
npm install

## Configurar Variables de Entorno: Crea un archivo .env en la raíz del proyecto con las siguientes variables:
PORT=8080
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/adoptme
JWT_SECRET=tu_secreto

## Iniciar el Servidor:
npm run dev

## Verificar el Proyecto: Accede a http://localhost:8080 en tu navegador o usa Postman para probar las rutas.

## Tecnologías Utilizadas
🧷Backend: Node.js, Express.js
🧷Base de Datos: MongoDB (con Mongoose)
🧷Autenticación: JWT y cookies
🧷Simulación: Faker.js para datos ficticios