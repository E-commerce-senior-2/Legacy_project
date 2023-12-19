import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./routes/user_route";
import creatorRoute from "./routes/creator_route";
import followingCreator from "./routes/followingCreator_route";
import basket from "./routes/basket_route";
const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoute);

// creator Route:
app.use("/creators", creatorRoute)

// following Creator:
app.use("/followingCreator", followingCreator)

// basket :
app.use("/baskets", basket)

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
