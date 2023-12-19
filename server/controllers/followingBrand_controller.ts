import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';

const prisma = new PrismaClient()
const Users = prisma.user
const Brand = prisma.brand

export const getUsers = async (req: Request, res: Response) => {
    const { idbrand } = req.params
    try {
        let follower = await Brand.findUnique({
            where: { id: +idbrand },
            include: {
                followers:
                {
                    include:
                    {
                        user: true,
                    }
                }
            }

        })
        const followers = follower?.followers.map((fav) => fav.user) || [];
        res.status(200).send(followers)
    } catch (err) {
        res.status(400).send({ error:err })
    }
}

export const newFollower = async (req: Request, res: Response) => {
    const { idbrand, idUser } = req.params
    // console.log(idbrand, idUser);
    try {
        let follower = await prisma.followingBrand.create({data:{
            userId: +idUser,
            brandId: +idbrand}
        })
        res.status(200).send("Follow added")
    } catch (err) {
        res.status(400).send({ error:err })
    }
}

export const removeFollow = async (req: Request, res: Response) => {
    let { idbrand, iduser } = req.params
    // console.log(idbrand, iduser)
    try {
        const removeFollower = await prisma.followingBrand.deleteMany({
            where: { brandId: +idbrand, userId: +iduser }
        })
        res.status(200).send("follow removed")
    } catch (err) {
        res.status(404).send({ error:err })
    }
}