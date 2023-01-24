export default {
  setUser(state: { user: any; }, payload: any) {
    state.user = payload;
  },
  setUserEmail(state: { userEmail: any; }, payload: any) {
    state.userEmail = payload;
  },
  setUserName(state: { userName: any; }, payload: any) {
    state.userName = payload;
  },
  setUserUid(state: { userUid: any; }, payload: any) {
    state.userUid = payload;
  }
}