import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import { useFirestore } from 'vuefire';
export default {
  async fetchProblems(context: any) {
    const db = useFirestore();
    const querySnapshot = await getDocs(collection(db, 'problems'));

    interface ProblemProps {
      problemId: string;
      problemTitle: string;
      problemStatement: string;
      sampleInput: string;
      sampleOutput: string;
      tags: string[];
      points: number;
      difficulty: 'easy' | 'medium' | 'hard' | 'advanced';
    }

    const problems = [] as ProblemProps[];
    querySnapshot.forEach((doc) => {
      problems.push({
        problemId: doc.id,
        problemTitle: doc.data().problem_title,
        problemStatement: doc.data().problem_statement,
        sampleInput: doc.data().sample_input,
        sampleOutput: doc.data().sample_output,
        tags: doc.data().tags,
        points: doc.data().points,
        difficulty: doc.data().difficulty
      });
    });
    context.commit('SET_PROBLEMS', problems);
  },
}