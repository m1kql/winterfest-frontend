export default {
  user: (state: any) => state.user,
  user_id: (state: any) => state.user.user_id,
  user_name: (state: any) => state.user.user_name,
  user_email: (state: any) => state.user.user_email,
  user_photo_url: (state: any) => state.user.user_photo_url,
  user_points: (state: any) => state.user.user_points,
  user_problems_solved: (state: any) => state.user.user_problems_solved,
  p1_submissions_left: (state: any) => state.user.p1_submissions_left,
  p2_submissions_left: (state: any) => state.user.p2_submissions_left,
  p3_submissions_left: (state: any) => state.user.p3_submissions_left,
  p4_submissions_left: (state: any) => state.user.p4_submissions_left,
  p5_submissions_left: (state: any) => state.user.p5_submissions_left,
  p6_submissions_left: (state: any) => state.user.p6_submissions_left,
  p7_submissions_left: (state: any) => state.user.p7_submissions_left,
  p8_submissions_left: (state: any) => state.user.p8_submissions_left,
  user_submissions: (state: any) => state.user.user_submissions,
}