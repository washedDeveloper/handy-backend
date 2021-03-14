import express from "express";
import { IssueModel } from "../database/issue/isssue.model";
import { IIssueDocument } from "../database/issue/issue.types";

export const getPopularController = async (
  req: express.Request,
  res: express.Response
) => {
  const issues = await IssueModel.find({});
  const sorted = issues.sort(
    (a: IIssueDocument, b: IIssueDocument) => b.stars - a.stars
  );
  console.log(sorted);
  return res.json({
    top3: sorted.slice(0, 3),
  });
};
