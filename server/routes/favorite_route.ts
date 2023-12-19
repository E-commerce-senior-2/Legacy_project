import { Router } from 'express';
import * as favoriteController from '../controllers/favorite_controller';

 const route=Router()

route.get("/:iduser", favoriteController.getFavItem);
route.post("/:idItem/:iduser", favoriteController.addFav);
route.delete("/:iditem/:iduser", favoriteController.removeFav);


export default route