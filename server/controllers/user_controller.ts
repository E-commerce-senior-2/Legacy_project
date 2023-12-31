import { PrismaClient } from '@prisma/client'  
import { Request, Response } from 'express';

const prisma = new PrismaClient()





export const getUser = async (req: Request, res: Response)  =>{
  const {id} = req.params
  try {
    const user = await prisma.user.findUnique({
      where : {id : +id}
    })
    res.status(200).send(user)
  }catch(err) {
    res.status(400).json({error: err})
  }
}

