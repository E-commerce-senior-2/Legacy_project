import { PrismaClient } from '@prisma/client'  
import { Request, Response } from 'express';

const prisma = new PrismaClient()

export const getAll = async (req: Request, res: Response) => {
  try {
    let brand = await prisma.brand.findMany({});
    if (brand.length) {
      res.status(200).send(brand);
    } else {
      res.status(230).send([]);
    }
  } catch (err) {
    res.status(400).json({error:err});
  }
};

export const getOne = async (req: Request, res: Response) => {
  const { brand } = req.params;

  console.log(brand);
  try {
    const oneBrand = await prisma.brand.findUnique({ where: { id : +brand } });
    res.status(200).send(oneBrand);
  } catch (err) {
    res.status(400).send({error:err});
  }
};

export const addBrand = async (req: Request, res: Response) => {
  const { brandName, brandImage, bgImage, status } = req.body;
  try {
    let newBrand = await prisma.brand.create({
      data:  {
     brandName,
      brandImage,
      bgImage,
      status,
    },});
    res.status(200).json("added successfully");
  } catch (err) {
    res.status(400).json({error:err});
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  let idBrand = req.params.id_brand;
  const { brandName, brandImage, status } = req.body;
  try {
    const newStatus = await prisma.brand.update({
            where: {
              id: +idBrand,
            },
          
      data:{ brandName, brandImage, status },
      }
    );
    res.status(200).json("Statust Brand updated successfully");
  } catch (err) {
    res.status(400).json({error:err});
  }
};
