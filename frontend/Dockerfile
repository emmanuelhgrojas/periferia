# Usa la imagen oficial de Node.js como base para la construcción
FROM node:16 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Ejecuta el build de la aplicación React
RUN npm run build

# Usa una imagen ligera de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos de build generados en la etapa anterior al contenedor Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para servir el frontend
EXPOSE 80

# Ejecuta Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]