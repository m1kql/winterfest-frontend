import { auth } from "@/config/firebaseConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export default {
  async signup(context: any, { email, password }: any) {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (response) {
      context.commit("setUser", response.user);
    } else {
      context.commit("setUser", null);
    }
  },
  async login(context: any, { email, password }: any) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      context.commit("setUser", response.user);
    } else {
      context.commit("setUser", null);
    }
  },

  async logout(context: any) {
    await auth.signOut();
    context.commit("setUser", null);
  }
}