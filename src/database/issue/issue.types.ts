import { Document, Model } from "mongoose";

export interface IIssue {
  issueName: string;
  issueDescription: string;
  difficulty: string;
  skill: string;
  language: string;
  issueUrl: string;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}

export interface IIssueDocument extends IIssue, Document {}

export interface IIssueModel extends Model<IIssueDocument> {
  findByDifficultyAndLanguage: (
    this: IIssueModel,
    difficulty: string,
    languages: string[]
  ) => Promise<IIssueDocument[] | null>;
}
