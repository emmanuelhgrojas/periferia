# Usa la imagen oficial de Node.js como base
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Genera Prisma Client
RUN npx prisma generate

# Expone el puerto que usará la aplicación (por defecto, Express usa el puerto 3000)
EXPOSE 3000

# Ejecuta el servidor de la aplicación
CMD ["npm", "start"]