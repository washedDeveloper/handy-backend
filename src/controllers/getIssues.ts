import express from "express";
import { IssueModel } from "../database/issue/isssue.model";

interface getIssuesBody {
  language: string;
  difficulty: string;
  skill: string;
}
export const getIssuesController = async (
  req: express.Request,
  res: express.Response
) => {
  const filter: getIssuesBody = req.body;
  let results = await IssueModel.find({
    language: filter.language,
    difficulty: filter.difficulty,
    skill: filter.skill,
  });
  return res.json({
    results,
  });
};
