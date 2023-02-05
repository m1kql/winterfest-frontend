import { StatusCodes } from "./statusCodes";

export default interface SubmissionStatus {
  // Path: src/store/modules/submission/models/submissionStatus.ts
  user_id: string;
  problem_id: string;
  problem_name: string;
  status: StatusCodes;
}