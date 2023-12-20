import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient()


const getAllComments = async (req : Request , res:Response) => {
    let {postId} = req.params
    let id: number = +postId
    try {
        const comments = await prisma.comment.findMany({
            where : {postId : id}
        })

        res.status(200).json(comments)
    }catch(err){
        res.status(400).send(err)
    }
}

const createComment = async (req: Request , res : Response) => {
    let {userId , postId} = req.params
    let Uid = +userId
    let Pid = +postId
    let {comment} = req.body
    try {
        const result = await prisma.comment.create({
            data : {
                comment,
                userId  : Uid,
                postId : Pid
            }
        })
        res.status(201).json(result)
    }catch (err) {
        res.status(201).send(err)
    }
}

const updateComment = async (req : Request , res : Response) => {
    let {commentId , userId} = req.params
    let id = +commentId
    let Uid = +userId
    let {comment} = req.body
    try {
        const result = await prisma.comment.update({
            where : {id, userId : Uid},
            data : {comment}
        })
        res.status(200).json(result)
    }catch (err) {
        res.status(400).send(err)
    }
}


const deleteComment = async (req : Request , res : Response) => {
    let {commentId , userId} = req.params
    let id = +commentId
    let Uid = +userId
    try {
        const result = await prisma.comment.delete({
            where : {id , userId : Uid}
        })
        res.status(200).json(result)
    }catch (err){
        res.status(400).send(err)
    }
}


export {
    getAllComments,
    createComment,
    updateComment,
    deleteComment
}