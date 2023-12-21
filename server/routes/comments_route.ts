import { Router } from "express";
import {getAllComments , createComment , updateComment , deleteComment} from "../controllers/comments_controller"

const route = Router()

route.get("/Post/:postId" , getAllComments)
route.post("/Post/:userId/:postId" , createComment )
route.put("/Post/:userId/:commentId" , updateComment)
route.delete("/Post/:userId/:commentId" , deleteComment)


export default route