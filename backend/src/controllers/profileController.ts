import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';

export const getProfile = async (req: Request, res: Response)=> {
  const userId = req.body.userId; // El userId proviene del middleware `authenticateJWT`

  try {
    // Obtener la información del perfil del usuario desde la base de datos
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, createdAt:true }, // Puedes agregar más campos si lo necesitas
    });

    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};