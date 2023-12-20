import { Router } from "express";
import * as collectionController from "../controllers/collection_controller"

const route = Router()

route.get('/',collectionController.getAll)
route.get("collection/:creator/:brand", collectionController.getBrandCollections);
route.get("collection/:creator", collectionController.getAllBrandsCollections);
route.get(
    "/item/:brand",
    collectionController.getOneBrandsCollection
  );
  route.get(
    "/:brand/:creator/:collection_id",
    collectionController.getOneBrandsWithCreaterCollection
  );
  route.post("/:brand/:creator", collectionController.addCollection);

export default route