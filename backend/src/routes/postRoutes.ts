import express from 'express';
import { getPosts, createPost, likePost } from '../controllers/postController';

const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Obtener publicaciones
 *     description: Obtiene una lista de publicaciones de otros usuarios.
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   content:
 *                     type: string
 *                   userId:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get('/', getPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Crear una nueva publicación
 *     description: Crea una nueva publicación en la red social.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Publicación creada con éxito
 *       400:
 *         description: Error al crear la publicación
 */
router.post('/', createPost);
router.post('/:id/like', likePost);

export default router;