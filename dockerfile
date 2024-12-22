FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto
EXPOSE 8080

# Configurar variable de entorno
ENV NODE_ENV=production

# Comando de inicio
CMD ["npm", "start"]
