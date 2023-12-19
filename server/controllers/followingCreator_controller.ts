import { Creator, PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';
const prisma = new PrismaClient()


export const getFollower = async (req: Request, res: Response): Promise<void> => {
    const { idcreator } = req.params
    try {
        let follower = await prisma.creator.findUnique({
            where: { id: +idcreator },
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
        res.status(400).send(err)
    }
}

export const newFollow = async (req: Request, res: Response): Promise<void> => {
    const idcreator: string = req.params.idcreator
    const iduser: string = req.params.iduser
    // const { idcreator, iduser } : {idcreator : Init} = req.params
    try {
        const follow = await prisma.followingCreator.create({
            data: {
                userId: +iduser,
                creatorId: +idcreator
            }
        })
        res.status(200).send(follow)
    } catch (err) {
        res.status(400).json(err)
    }
}

export const removeFollow = async (req: Request, res: Response): Promise<void> => {
    const { idcreator, iduser } = req.params

    try {
        const removeFollow = await prisma.followingCreator.deleteMany({ where: { userId: +iduser, creatorId: +idcreator } })
        res.status(200).send("follow removed")
    } catch (err) {
        res.status(400).send({error:err})
    }
}