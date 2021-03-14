import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import api from "./routes/api";
import { connectToMongo } from "./database/database";

const app = express();
app.use(cors());
dotenv.config();
connectToMongo();

app.use(express.json());
app.get("/", (_, res: express.Response) => {
  return res.json({
    hello: "world",
  });
});
app.use("/api", api);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
