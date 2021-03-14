import { model } from "mongoose";
import IssueSchema from "./issue.schema";
import { IIssueDocument } from "./issue.types";

export const IssueModel = model<IIssueDocument>("issue", IssueSchema);
