import { auth } from "@/config/firebaseConfig"
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useCollection, useFirestore } from "vuefire";
import router from "@/router";


export default {
  async setUser(context: any, user: any) {
    context.commit("SET_USER", user);
    context.commit("SET_USER_NAME", user.displayName);
    context.commit("SET_USER_EMAIL", user.email);
    context.commit("SET_USER_UID", user.uid);
    context.commit("SET_USER_PHOTO_URL", user.photoURL);
    context.commit("SET_IS_LOGGED_IN", true);
  },
  signInWithGoogle(context: any) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      context.commit("SET_USER", result.user);
      context.commit("SET_USER_NAME", result.user.displayName);
      context.commit("SET_USER_EMAIL", result.user.email);
      context.commit("SET_USER_UID", result.user.uid);
      context.commit("SET_USER_PHOTO_URL", result.user.photoURL);
      context.commit("SET_IS_LOGGED_IN", true);
      context.dispatch("createUser", result.user);
      router.push("/dashboard");

    }).catch(function (error) {
      console.log(error);
    });
  },

  logout(context: any) {
    auth.signOut();
    context.dispatch("destroyAuthState");

  },

  destroyAuthState(context: any) {
    context.commit("SET_USER", null);
    context.commit("SET_USER_NAME", null);
    context.commit("SET_USER_EMAIL", null);
    context.commit("SET_USER_UID", null);
    context.commit("SET_USER_PHOTO_URL", null);
    context.commit("SET_IS_LOGGED_IN", false);
  },

  /* ====== */

  /*
   * IGNORE THE FOLLOWING CODE FOR NOW
   * IT IS NOT BEING USED 
   * IT IS FOR EMAIL SIGN IN LINKS // PASSWORDLESS AUTHENTICATION
   */

  /* ====== */
  async sendSignInLink(context: any, { email }: any) {
    const actionCodeSettings = {
      url: `${location.origin}/login`,
      handleCodeInApp: true,
    };
    context.commit("SET_USER_EMAIL", email);
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  },
  async signup(context: any, { email, password }: any) {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (response) {
      context.commit("SET_USER", response.user);
    } else {
      context.commit("SET_USER", null);
    }
  },
  async login(context: any, { email, password }: any) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      context.commit("SET_USER", response.user);
    } else {
      context.commit("SET_USER", null);
    }
  },


}