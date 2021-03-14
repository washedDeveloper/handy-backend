import { IIssueModel } from "./issue.types";

export async function findByDifficultyLanguageSkill(
  this: IIssueModel,
  difficulty: string,
  language: string,
  skill: string
) {
  const record = await this.find({ difficulty, language, skill });
  if (record) {
    return record;
  }
  return null;
}
