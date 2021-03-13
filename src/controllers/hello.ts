import express from "express";
const helloController = (req: express.Request, res: express.Response) => {
  return res.json({
    hello: "world",
  });
};
export default helloController;
