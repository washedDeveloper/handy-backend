import express from "express";
import { IssueModel } from "../database/issue/isssue.model";

interface addStarsBody {
  id: string;
  amount: number;
}

export const addStarsController = async (
  req: express.Request,
  res: express.Response
) => {
  const body: addStarsBody = req.body;
  IssueModel.findOneAndUpdate(
    { _id: body.id },
    { $inc: { stars: body.amount } },
    { useFindAndModify: false },
    (err, _) => {
      if (err) {
        return res.json({
          success: false,
        });
      } else {
        return res.json({
          success: true,
        });
      }
    }
  );
};
