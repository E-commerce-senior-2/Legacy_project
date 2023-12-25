import { Creator, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getAllCreators = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const creators = await prisma.creator.findMany({});
    res.status(200).send(creators);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getOneCreators = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const oneCreator = await prisma.creator.findUnique({ where: { id: +id } });
    res.status(200).json(oneCreator);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const updateCreator = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { idCreator } = req.params;
  const {
    fullName,
    userName,
    status,
    bio,
    dateBirth,
    email,
    address,
  } = req.body;
  try {
    const newUpdate = await prisma.creator.update({
      where: { id: +idCreator },
      data: {
        fullName: fullName,
        userName: userName,
        status: status,
        bio: bio,
        dateBirth: dateBirth,
        email: email,
        address: address,
      },
    });
    res.status(200).send(newUpdate);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const addCreator = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    fullName,
    userName,
    bgImage,
    pfImage,
    status,
    bio,
    dateBirth,
    email,
    password,
    address,
  } = req.body;
  try {
    let newCreator = await prisma.creator.create({
      data: {
        fullName: fullName,
        userName: userName,
        bgImage: bgImage,
        pfImage: pfImage,
        status: status,
        bio: bio,
        dateBirth: dateBirth,
        email: email,
        password: password,
        address: address,
      },
    });
    res.status(200).send(newCreator);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};
