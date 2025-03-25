**Instalación y Explicación del Proyecto**

# 1. Introducción
Este documento describe la instalación y configuración de una red social desarrollada con arquitectura de microservicios. La aplicación permite a los usuarios iniciar sesión, ver su perfil y visualizar publicaciones con conteo de "likes".

# 2. Tecnologías Utilizadas
- **Backend:** Node.js, Express.js, Prisma ORM
- **Base de Datos:** PostgreSQL
- **Contenedores:** Docker, Docker Compose
- **Frontend:** React.js
- **Manejo de Estado:** React Context o Zustand

# 3. Instalación

## 3.1 Prerrequisitos
Antes de instalar el proyecto, asegúrese de tener instalados:
- [Node.js](https://nodejs.org/) y npm
- [Docker](https://www.docker.com/) y Docker Compose
- [Git](https://git-scm.com/)

## 3.2 Clonar el Repositorio
```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
```

# 4. Backend

## 4.1 Instalación de Dependencias
```sh
    cd backend
    npm install
```

## 4.2 Configuración de Variables de Entorno
Crear un archivo `.env` en la carpeta `backend` con los siguientes valores:
```
DATABASE_URL="postgresql://usuario:clave@localhost:5432/periferia?schema=public"
JWT_SECRET=clave_secreta
```

## 4.3 Migraciones y Seeder
```sh
    npx prisma migrate dev
    npx prisma db seed
```

## 4.4 Ejecutar el Backend
```sh
    npm run dev
```

# 5. Frontend

## 5.1 Instalación de Dependencias
```sh
    cd frontend
    npm install
```

## 5.2 Configuración de Variables de Entorno
Crear un archivo `.env` en la carpeta `frontend` con:
```
VITE_API_URL=http://localhost:3000
```

## 5.3 Ejecutar el Frontend
```sh
    npm run dev
```

# 6. Dockerización

## 6.1 Construir y Levantar los Contenedores
```sh
    docker-compose up --build
```

# 7. Documentación API
La documentación de los endpoints está disponible en Swagger en:
```
http://localhost:5000/api-docs
```

