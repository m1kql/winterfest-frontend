import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import { useFirestore } from 'vuefire';
export default {
  async fetchProblems(context: any) {
    const db = useFirestore();
    const querySnapshot = await getDocs(collection(db, 'problems'));
    const problems = [] as any[];
    querySnapshot.forEach((doc) => {
      problems.push(doc.data());
    });

    context.commit('SET_PROBLEMS', problems);
  },
  async fetchProblem(context: any, problemId: string) {
    const db = useFirestore();
    const problemRef = doc(db, 'problems', problemId);
    const problem = await getDoc(problemRef);
    if (problem.exists()) {
      context.commit('SET_PROBLEM', problem);
    } else {
      console.log('No such document!');
    }
  }
}