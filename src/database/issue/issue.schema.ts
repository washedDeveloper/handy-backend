import { Schema } from "mongoose";

const IssueSchema = new Schema({
  name: String,
  description: String,
  difficulty: String,
  skill: String,
  language: String,
  link: String,
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

export default IssueSchema;
