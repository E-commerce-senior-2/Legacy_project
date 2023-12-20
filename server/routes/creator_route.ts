import { Router } from 'express';
import * as creatorController from '../controllers/creator_controller';
const router = Router();

router.get("/", creatorController.getAllCreators)
router.get("/:id", creatorController.getOneCreators)
router.put("/:idCreator", creatorController.updateCreator)
router.post("/newCreator", creatorController.addCreator)


export default router
