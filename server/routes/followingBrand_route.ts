import { Router } from 'express';
import * as FollowingBrandController from '../controllers/followingBrand_controller';

const route = Router();
route.get("/:idbrand", FollowingBrandController.getUsers);
route.post("/:idbrand/:idUser", FollowingBrandController.newFollower);
route.delete("/:idbrand/:iduser", FollowingBrandController.removeFollow)
export default route 