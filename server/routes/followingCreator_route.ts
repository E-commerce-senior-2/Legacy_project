import { Router } from 'express';
import * as followingCreatorController from '../controllers/followingCreator_controller';
const router = Router();

router.post("/:idcreator/:iduser", followingCreatorController.newFollow)
router.get("/:idcreator", followingCreatorController.getFollower)
router.delete("/:idcreator/:iduser", followingCreatorController.removeFollow)
export default router