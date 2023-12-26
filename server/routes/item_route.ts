import { Router } from "express";
import {CreateItem, getAllItems, getBrandItems, getItemCollection, getItemStatus, getOneItem, updateItemStatus} from "../controllers/item_controller"

const route = Router()

route.get("/" , getAllItems )
route.get("/brands/:category", getBrandItems)
route.get("/item/status/:status" , getItemStatus)
route.get("/brand/collections/:name", getOneItem)
route.get("/brand/collection/:collectionId" , getItemCollection)
route.post("/" , CreateItem)
route.put("/update/:itemId", updateItemStatus )


export default route