import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Crear usuarios de prueba
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'profile-one@example.com',
      password: await bcrypt.hash('password123', 10), // Asegúrate de que las contraseñas estén cifradas
      updatedAt: new Date()
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'profile-two@example.com',
      password: await bcrypt.hash('password123', 10),
      updatedAt: new Date()
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });