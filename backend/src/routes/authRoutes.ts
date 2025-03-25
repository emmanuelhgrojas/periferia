import express from 'express';
import { loginUser, registerUser } from '../controllers/authController';

const router = express.Router();
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión
 *     description: Inicia sesión en la aplicación con correo electrónico y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token de autenticación
 *       400:
 *         description: Credenciales incorrectas
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     description: Crea un nuevo usuario en la aplicación con nombre, correo electrónico y contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: El correo electrónico ya está registrado
 */
router.post('/register', registerUser);

export default router;