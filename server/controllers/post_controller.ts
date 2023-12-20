import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";


const prisma = new PrismaClient()

const getAllPosts = async (req : Request , res:Response) => {
    let {creatorId} = req.params
    let id : number = +creatorId
    try {
        const posts = await prisma.post.findMany({
            where : {creatorId : id}
        })
        if(!!posts.length) {
            res.status(200).json(posts)
        }else {
            res.status(230).send([])
        }
    }catch (err) {
        res.status(400).send(err)
    }
}

const addPost = async (req : Request , res:Response) => {
    let {creatorId} = req.params
    let id : number = +creatorId
    let{status , image} = req.body
    try {
        if(!(status && image)) {
          return  res.status(401).send("All inputs are required")
        }


        const post = await prisma.post.create({
            data : {
                creatorId : id,
                status : status,
                image : image,
                like:0
            }
        })
        res.status(201).json(post)
    }catch (err) {
        res.status(401).send(err)
    }
}

const updatePostStatus = async (req : Request , res:Response) => {
    let {status} = req.body
    let {postId} = req.params
    let id : number = +postId
    try {
        const post = await prisma.post.update({
            where : {id},
            data : {status}
        })
        res.status(200).send(post)
    }catch (err) {
        res.status(400).send(err)
    }
}

const deletePost = async (req : Request , res : Response) => {
    let {postId} = req.params
    let id : number = +postId
    try {
        const post = await prisma.post.delete({
            where : {id}
        })
        res.status(200).json(post)
    }catch (err) {
        res.status(404).send(err)
    }
}


export  {
    getAllPosts,
    addPost,
    updatePostStatus,
    deletePost
}