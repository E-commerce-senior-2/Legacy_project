import { Router } from 'express';
import * as creatorController from '../controllers/creator_controller';
const router = Router();

router.get("/", creatorController.getAllCreators)
router.get("/:id", creatorController.getOneCreators)
router.put("/:idCreator", creatorController.updateCreator)
router.post("/newCreator", creatorController.addCreator)
router.put("/bgimage/:id",creatorController.updateBg)
router.put("/pfimage/:id",creatorController.updatePf)
router.get("/searchCreator/:name",creatorController.searchCreator)

export default router
