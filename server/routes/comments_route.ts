import { Router } from "express";
import {getAllComments , createComment , updateComment , deleteComment} from "../controllers/comments_controller"

const route = Router()

route.get("/Post" , getAllComments)
route.post("/Post/:userId/:postId" , createComment )
route.put("/Post/:userId/:postId" , updateComment)
route.delete("/Post/:userId/:postId" , deleteComment)


export default route