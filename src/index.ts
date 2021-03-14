import express from "express";
import dotenv from "dotenv";
import api from "./routes/api";
import { connectToMongo } from "./database/database";

const app = express();
dotenv.config();
connectToMongo();

app.use(express.json());
app.get("/", (_, res: express.Response) => {
  return res.json({
    hello: "world",
  });
});
app.use("/api", api);

app.listen(8080, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
