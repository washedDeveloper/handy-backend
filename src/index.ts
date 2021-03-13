import express from "express";
import dotenv from "dotenv";
import api from "./routes/api";

const app = express();
dotenv.config();

app.use("/api", api);

app.listen(8080, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
