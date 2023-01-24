export default {
  getUserData: (state: any) => state.userData,
  getIsLoggedIn: (state: any) => state.isLoggedIn,
  getUserEmail: (state: any) => state.userData.email,
  getUserName: (state: any) => state.userData.name,
  getUserPhoto: (state: any) => state.userData.photo,
  getUserUid: (state: any) => state.userData.uid,
}