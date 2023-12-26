import { Router } from "express";
import {addLike, addPost, deletePost, getAllPosts, updatePostStatus } from "../controllers/post_controller"

const route = Router();

route.get("/:creatorId" , getAllPosts)
route.post("/:creatorId", addPost)
route.put("/status/:postId" , updatePostStatus)
route.delete("/:postId", deletePost)
route.put('/like/:postId',addLike)
export default route