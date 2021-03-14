import express from "express";
import { IssueModel } from "../database/issue/isssue.model";
import { IIssue } from "../database/issue/issue.types";

const createIssueController = async (
  req: express.Request,
  res: express.Response
) => {
  const issue: IIssue = req.body;
  issue.stars = 0;
  try {
    await IssueModel.create(issue);
  } catch (e) {
    return res.status(500).json({
      success: false,
    });
  }
  return res.json({
    success: true,
  });
};

export default createIssueController;
