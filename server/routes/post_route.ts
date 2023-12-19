import { Router } from "express";
import { addPost, deletePost, getAllPosts, updatePostStatus } from "../controllers/post_controller"

const route = Router();

route.get("/:creatorId" , getAllPosts)
route.post("/:creatorId", addPost)
route.put("/status/:postId" , updatePostStatus)
route.delete("/:postId", deletePost)

export default route