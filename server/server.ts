import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoute from "./routes/user_route";
import itemsRoute from "./routes/item_route"
import postRoute from "./routes/post_route"

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use("/api/user", userRoute);

//Items route//
app.use("/Items" , itemsRoute )


//Posts route //
app.use("/Posts" ,postRoute )

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
