import { Router } from 'express';
import * as UserController from '../controllers/brand_controller';

 const route = Router()


route.get("/", UserController.getAll);
route.get("/:brand", UserController.getOne);
route.post("/addBrand",UserController.addBrand);
route.put("/newStatus/:id_brand", UserController.updateStatus);
 

export default route