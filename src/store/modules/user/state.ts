import SubmissionStatus from "../submission/models/submissionStatus";

export default {
  p1_submissions_left: 5,
  p2_submissions_left: 5,
  p3_submissions_left: 5,
  p4_submissions_left: 5,
  p5_submissions_left: 5,
  p6_submissions_left: 5,
  p7_submissions_left: 5,
  p8_submissions_left: 5,
  user_email: "",
  user_id: "",
  user_name: "",
  user_problems_solved: 0,
  user_points: 0,
  user_photo_url: "",
  temp_file_submission: {} as File,
  user_submissions: [
    {
      problem_id: "",
      problem_title: "",
      code_storage_bucket_url: "",
      code_storage_bucket_file_name: "",
      code_language: "",
      result: {} as SubmissionStatus,
    }
  ],
}