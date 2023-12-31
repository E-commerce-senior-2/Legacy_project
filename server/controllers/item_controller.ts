import { PrismaClient } from "@prisma/client";
import { Response, Request, RequestHandler } from "express";

const prisma = new PrismaClient();

const getAllItems = async (req: Request, res: Response) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
const CreateItem = async (req: Request, res: Response) => {
  let {
    name,
    status,
    gender,
    image,
    price,
    category,
    description,
    stock,
    collectionId,
  } = req.body;
  try {
 
    const item = await prisma.item.create({
      data: {
        name,
        status,
        gender,
        image,
        price,
        category,
        description,
        stock,
        collectionId: collectionId,
      },
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(401).json({ error: err });
  }
};

const getBrandItems = async (req: Request, res: Response) => {
  let { category } = req.params;
  try {
    const result = await prisma.item.findMany({
      where: { category },
    });
    if (!!result.length) {
      res.status(200).json(result);
    } else {
      res.status(230).send([]);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const getItemStatus = async (req: Request, res: Response) => {
  const { status } = req.params;
  console.log(status);
  try {
    const result = await prisma.item.findMany({
      where: { status: status },
    });
    if (!!result.length) {
      res.status(200).json(result);
    } else {
      res.status(230).send([]);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const getItemCollection = async (req: Request, res: Response) => {
  const { collectiondId } = req.params;
  let id = +collectiondId;
  try {
    const result = await prisma.item.findMany({
      where: { collectionId: id },
    });
    if (!!result.length) {
      res.status(200).json(result);
    } else {
      res.status(230).send([]);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const getOneItem = async (req: Request, res: Response) => {
  const { name, collectiondId } = req.params;
  let id: number = +collectiondId;
  try {
    const result = await prisma.item.findFirst({
      where: { name: name },
    });
    if (!!result) {
      res.status(200).send(result);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateItemStatus = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  let id: number = Number(itemId);
  const { status } = req.body;
  console.log(itemId, status);
  try {
    await prisma.item.update({
      where: { id },
      data: {
        status: status,
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

export {
  CreateItem,
  getAllItems,
  getBrandItems,
  getItemStatus,
  getItemCollection,
  getOneItem,
  updateItemStatus,
};