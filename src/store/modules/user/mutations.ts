export default {
  SET_USER(state: any, user: any) {
    state.user_id = user.user_id;
    state.user_name = user.user_name;
    state.user_email = user.user_email;
    state.user_photo_url = user.user_photo_url;
    state.user_points = user.user_points;
    state.user_problems_solved = user.user_problems_solved;
    state.p1_submissions_left = user.p1_submissions_left;
    state.p2_submissions_left = user.p2_submissions_left;
    state.p3_submissions_left = user.p3_submissions_left;
    state.p4_submissions_left = user.p4_submissions_left;
    state.p5_submissions_left = user.p5_submissions_left;
    state.p6_submissions_left = user.p6_submissions_left;
    state.p7_submissions_left = user.p7_submissions_left;
    state.p8_submissions_left = user.p8_submissions_left;
    state.user_submissions = user.user_submissions;
  }
}