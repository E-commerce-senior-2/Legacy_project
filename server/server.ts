import express, { Application, Request, Response } from "express";
import cors from "cors";

import userRoute from "./routes/user_route";
import creatorRoute from "./routes/creator_route";
import followingCreator from "./routes/followingCreator_route";
import basket from "./routes/basket_route";
import itemsRoute from "./routes/item_route"
import postRoute from "./routes/post_route"
import brandRoute from './routes/brand_route';
import favoriteRoute from './routes/favorite_route';
import followingBrandRoute from './routes/followingBrand_route'
import collectionRoute from "./routes/collection_route"
import authRoute from "./routes/auth_route"
import commentRoute from "./routes/comments_route"




const app: Application = express();

app.use(express.json());
app.use(cors());

/* Collection Route */
app.use('/collections', collectionRoute);
/* Collection Route*/
//  authentification route 

app.use("/auth", authRoute);
//user route 
app.use("/user", userRoute);
// brand route:
app.use("/brands", brandRoute); 
//favorite Items route:
app.use("/favoriteItem", favoriteRoute); 
// following  brand 
app.use("/followingBrand", followingBrandRoute)


//Items route//
app.use("/Items" , itemsRoute )
//Comment Route//
app.use("/Comment", commentRoute)
//Posts route //
app.use("/Posts" ,postRoute )

// creator Route:
app.use("/creators", creatorRoute)

// following Creator:
app.use("/followingCreator", followingCreator)

// basket :
app.use("/baskets", basket)

app.listen(3001, () => {
  console.log("listening on http://localhost:3001");
});



//authentication route
// const authRoute = require("./route/auth_route.js")
// app.use("/auth", authRoute);
