import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./routes/user_route";
import brandRoute from './routes/brand_route';
import favoriteRoute from './routes/favorite_route';
import followingBrandRoute from './routes/followingBrand_route'

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoute);
// brand route:
app.use("/brands", brandRoute); 
//favorite Items route:
app.use("/favoriteItem", favoriteRoute); 
// following  brand 
app.use("/followingBrand", followingBrandRoute)

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
