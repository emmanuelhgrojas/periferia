import { Request, Response } from 'express';
import prisma from '../prisma/prismaClient';

export const getPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    include: {
      user: true,  // Incluir la información del autor
    },
  });

  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content, userId } = req.body;

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      userId,
    },
  });

  res.status(201).json(newPost);
};

export const likePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  const post = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { likes: { increment: 1 } },
  });

  res.json(post);
};