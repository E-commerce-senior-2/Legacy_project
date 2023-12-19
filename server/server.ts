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




const app: Application = express();

app.use(express.json());
app.use(cors());

/* Collection Route */
app.use('/collections', collectionRoute);
/* Collection Route*/


app.use("/api/user", userRoute);
// brand route:
app.use("/brands", brandRoute); 
//favorite Items route:
app.use("/favoriteItem", favoriteRoute); 
// following  brand 
app.use("/followingBrand", followingBrandRoute)


//Items route//
app.use("/Items" , itemsRoute )


//Posts route //
app.use("/Posts" ,postRoute )

// creator Route:
app.use("/creators", creatorRoute)

// following Creator:
app.use("/followingCreator", followingCreator)

// basket :
app.use("/baskets", basket)

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});



//authentication route
// const authRoute = require("./route/auth_route.js")
// app.use("/auth", authRoute);
