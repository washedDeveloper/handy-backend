import createIssue from "./createIssue";
import { getIssuesController } from "./getIssues";
import { getPopularController } from "./getPopular";

export default {
  createIssue: createIssue,
  getIssues: getIssuesController,
  getPopular: getPopularController,
};
