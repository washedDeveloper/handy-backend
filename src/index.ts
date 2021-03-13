import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  return res.json({
    hello: "worldd",
  });
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
