import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// router.get('/health', (_req, res) => {
//  return res.status(200).send('ok')
// })

// router.get('/users', async (req: Request, res: Response) => {
//  try {
//   const users = await prisma.user.findMany();
//   res.status(200).json(users);
//  } catch (error) {
//   console.error(error);
//   res.status(500).send('Internal Server Error');
//  }
// });

router.get('/menu', async (req, res) => {
 try {
  const menuItems = await prisma.menu.findMany();
  res.status(200).json(menuItems);
 } catch (err) {
  res.status(500).send(err)
 }
})

export default router;