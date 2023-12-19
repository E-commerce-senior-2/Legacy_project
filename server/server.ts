import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./routes/user_route";

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});



//authentication route
// const authRoute = require("./route/auth_route.js")
// app.use("/auth", authRoute);
