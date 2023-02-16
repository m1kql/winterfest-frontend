import { collection, doc, getDoc, getDocs, query, setDoc } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import { useFirestore } from 'vuefire';
export default {
  async fetchUser({ commit }: any, userId: any) {
    const db = useFirestore();
    const userDoc = doc(db, 'users', userId);
    const user = await getDoc(userDoc);
    if (user.exists()) {
      commit('SET_USER', user.data());
    } else {
      console.log('No such document!');
    }
  },
  async createUser({ commit }: any, user: any) {
    const db = useFirestore();
    const userDoc = doc(db, 'users', user.uid);
    const userRef = await setDoc(userDoc, {
      user_id: user.uid,
      user_name: user.displayName,
      user_email: user.email,
      user_photo_url: user.photoURL,
      user_points: 0,
      user_problems_solved: 0,
      p1_submissions_left: 5,
      p2_submissions_left: 5,
      p3_submissions_left: 5,
      p4_submissions_left: 5,
      p5_submissions_left: 5,
      p6_submissions_left: 5,
      p7_submissions_left: 5,
      p8_submissions_left: 5,
      user_submissions: [],
    });
    commit('SET_USER', userRef);
  }
}