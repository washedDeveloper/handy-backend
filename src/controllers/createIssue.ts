import express from "express";
import { IssueModel } from "../database/issue/isssue.model";

interface createIssueBody {
  projectName: string;
  projectURL: string;
  owner: string;
}

const createIssueController = async (
  req: express.Request,
  res: express.Response
) => {
  const issue: createIssueBody = req.body;
  await IssueModel.create(issue);
  console.log("created issue");
};

export default createIssueController;
