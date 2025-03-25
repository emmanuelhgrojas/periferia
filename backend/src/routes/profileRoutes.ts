import express from 'express';
import { getProfile } from '../controllers/profileController';
import { authenticateJWT } from '../middlewares/authMiddleware';


const router = express.Router();

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Obtener perfil de usuario
 *     description: Obtiene los detalles del perfil del usuario autenticado.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: No autorizado, token no válido
 */
router.get('/profile', authenticateJWT, getProfile);

export default router;