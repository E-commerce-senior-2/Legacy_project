import { Prisma, PrismaClient } from '@prisma/client'  
import { Request, Response } from 'express';

const prisma = new PrismaClient()


export const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await prisma.collection.findMany({
            include:{
                brand: true,
                creator: true
            }
        })
        if(result.length){
            res.status(200).send(result)
        }else{
            res.status(230).send([])
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getBrandCollections = async (req: Request, res: Response): Promise<void> =>{
    const {brand,creator} = req.params
    try {
        const result = await prisma.collection.findMany({
            where:{
                brandId: parseInt(brand),
                creatorId: parseInt(creator)
            },
            include:{
                brand: true,
                creator: true
            }
        })
        if(result.length){
            res.status(200).send(result)
        }else{
            res.status(230).send([])
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getAllBrandsCollections = async (req: Request, res: Response): Promise<void> => {
    const {creator} = req.params
    try {
        const result = await prisma.collection.findMany({
            where:{
                creatorId: parseInt(creator)
            },
            include:{
                brand: true
            }
        })
        if(result.length){
            res.status(200).send(result)
        }else{
            res.status(230).send([])
        }
    } catch (error) {
        res.status(400).send(error)
    }
    
}

export const getOneBrandsWithCreaterCollection = async (req: Request, res: Response):Promise <void> => {
    const { creator, collection_id, brand } = req.params;
    try {
        const result = await prisma.collection.findFirst({
            where:{id: +collection_id},
            include:{
                brand:true,
                creator:true
            }
        })
        if (result){
            res.status(200).send(result)
        }else{
            res.status(230).send([])
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

export const getOneBrandsCollection = async (req: Request, res: Response): Promise<void> => {
    const {brand} = req.params
    try {
        const result = await prisma.collection.findMany({
          where: {
            brandId: parseInt(brand),

          },
          include: {
            item: true,
            brand: true,
          },
        });
    
        if (result.length > 0) {
          res.status(200).send(result);
        } else {
          res.status(230).send([]);
        }
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
};

export const addCollection = async (req: Request, res: Response): Promise<void> => {
    const {creator,brand} = req.params;
    const {name} = req.body;
    try {
        const result = await prisma.collection.create({
          data: {
            name: name,
            creator: {
              connect: { id: +creator },
            },
            brand: {
              connect: { id: +brand },
            },
          },
        });
        res.status(200).send('Collection Added');
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
}