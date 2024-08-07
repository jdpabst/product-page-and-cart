import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/menu', async (req, res) => {
 try {
  const menuItems = await prisma.menu.findMany();
  res.status(200).json(menuItems);
 } catch (err) {
  res.status(500).send(err)
 }
})

export default router;