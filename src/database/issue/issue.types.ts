import { Document, Model } from "mongoose";

export interface IIssue {
  name: string;
  description: string;
  difficulty: string;
  skill: string;
  language: string;
  link: string;
  stars: number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}

export interface IIssueDocument extends IIssue, Document {}

export interface IIssueModel extends Model<IIssueDocument> {}
