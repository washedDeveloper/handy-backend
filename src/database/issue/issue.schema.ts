import { Schema } from "mongoose";
import { findByDifficultyLanguageSkill } from "./issue.statics";

const IssueSchema = new Schema({
  name: String,
  description: String,
  difficulty: String,
  skill: String,
  language: String,
  issueUrl: String,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

IssueSchema.static(
  "findByDifficultyLanguageSkill",
  findByDifficultyLanguageSkill as any
);

export default IssueSchema;
