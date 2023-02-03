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

      const user = {
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
        problems_solved: 0,
        problems_attempted: [
          {
            problem_id: 0,
            problem_name: "",
            problem_solved: false,
            problem_attempted: false,
            problem_attempted_count: 0,
            submissions: [
              {
                submission_id: 0,
                submission_code: "",
                submission_status: "",
                submission_time: "",
                submission_language: "",
                submission_time_taken: "",
                submission_verdict: "",
                submission_testcases_passed: 0,
                submission_testcases_failed: 0,
                submission_testcases_total: 0,
              }
            ]
          }
        ]
      }

      const db = useFirestore();
      const users = useCollection(collection(db, "users"));
      const currentUser = await getDoc(doc(db, "users", result.user.uid));
      if (currentUser.exists()) {
        console.log("User already exists");
      } else {
        await setDoc(doc(db, "users", result.user.uid), user).then(() => {
          console.log("User created successfully");
        }).catch((error) => {
          console.log(error);
        });
      }


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