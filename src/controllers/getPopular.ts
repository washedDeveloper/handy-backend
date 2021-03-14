import express from "express";
import { IssueModel } from "../database/issue/isssue.model";
import { IIssueDocument } from "../database/issue/issue.types";

export const getPopularController = async (
  req: express.Request,
  res: express.Response
) => {
  const issues = await IssueModel.find({});
  const sorted = issues.sort(
    (a: IIssueDocument, b: IIssueDocument) => a.stars - b.stars
  );
  return res.json({
    top3: sorted.slice(0, 3),
  });
};
