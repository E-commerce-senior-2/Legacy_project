import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const addToBasket = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.userId;
    const itemId = +req.params.itemId;
    const item = await prisma.basket.create({
      data: {
        userId,
        itemId,
      },
    });        
    res.status(201).send("successful");
  } catch {
    res.status(404).send("failed");
  }
};

export const getBasket = async (req: Request, res: Response) => {
  try {
    const baskets = await prisma.basket.findMany({
      where: { userId: +req.params.id },
      include: {
        item: true,
        user: true,
      },
    });

    res.send(baskets);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const deleteBasket = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idUser, idItem } = req.params;
  try {
    const deleted = await prisma.basket.deleteMany({
      where: { userId: +idUser, itemId: +idItem },
    });
    res.status(200).send("item deleted from basket");
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
