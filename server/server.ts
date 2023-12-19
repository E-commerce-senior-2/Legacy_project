import express, { Application, Request, Response } from "express";
import cors from "cors";
import collectionRoute from "./routes/collection_route"


const app: Application = express();

app.use(express.json());
app.use(cors());

/* Collection Route */
app.use('/collections', collectionRoute);
/* Collection Route*/


app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});



//authentication route
// const authRoute = require("./route/auth_route.js")
// app.use("/auth", authRoute);
