export default {
  SET_USER(state: { user: any; }, payload: any) {
    state.user = payload;
  },
  SET_USER_EMAIL(state: { userEmail: any; }, payload: any) {
    state.userEmail = payload;
  },
  SET_USER_NAME(state: { userName: any; }, payload: any) {
    state.userName = payload;
  },
  SET_USER_UID(state: { userUid: any; }, payload: any) {
    state.userUid = payload;
  },
  SET_USER_PHOTO_URL(state: { userPhotoUrl: any; }, payload: any) {
    state.userPhotoUrl = payload;
  },
  SET_IS_LOGGED_IN(state: { isLoggedIn: any; }, payload: any) {
    state.isLoggedIn = payload;
  },
}