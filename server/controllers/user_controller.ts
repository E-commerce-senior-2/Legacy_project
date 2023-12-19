import { PrismaClient } from '@prisma/client'  
import { Request, Response } from 'express';

const prisma = new PrismaClient()





export const createUser = async (req: Request, res: Response) :Promise<void> =>{
  const {fullName,userName,password,email,dateBirth} = req.body
  try {
    const user = await prisma.user.create({
      data: {
        fullName,
        userName,
        password,
        email,
        dateBirth
      }
    })
    res.status(201).json(user)
  }catch(err) {
    res.status(400).json({error: err})
  }
}

// async function createUser(req,res) {
//   const {userName:String,}
//   const user = await prisma.user.delete({
//     where: { id: 1 }
//   })
//   console.log(user)
// }

// main()
