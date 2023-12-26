import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
const User = prisma.user;
const Item = prisma.item;

export const getFavItem = async (req: Request, res: Response) => {
  const { iduser } = req.params;

  try {
    const userWithFavorites = await prisma.user.findUnique({
      where: { id: +iduser },
      include: {
        favorite: {
          include: {
            item: true,
          },
        },
      },
    });

    const favoriteItems =
      userWithFavorites?.favorite.map((fav) => fav.item) || [];

    res.status(200).send(favoriteItems);
  } catch (err) {
    res.status(400).send(err);
  }
};
export const addFav = async (req: Request, res: Response) => {
  const { idItem, iduser } = req.params;
  try {
    let newFav = await prisma.favorite.create({
      data: { userId: +iduser, itemId: +idItem },
    });
    res.status(200).send("fav item added");
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

export const removeFav = async (req: Request, res: Response): Promise<void> => {
  const idUser: number = +req.params.iduser; 
  const idItem: number = +req.params.iditem; 

  try {
    const deleted = await prisma.favorite.deleteMany({
      where: {  userId: idUser, itemId: idItem },
    });

    res.status(200).send("Favorite item removed successfully");
  } catch (err) {
    res.status(400).send({ error: err as Error });
  }
};



