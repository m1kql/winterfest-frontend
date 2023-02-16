import { auth } from '@/config/firebaseConfig';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { getCurrentUser, useCollection, useFirebaseStorage, useStorage } from 'vuefire';
import { useFirestore } from 'vuefire';
export default {

  async submitSolution({ commit }: any, problem_id: any, submission: File, code_language: string) {
    let uid = auth.currentUser ? auth.currentUser.uid : null;
    const storage = useFirebaseStorage();
    const submissionsRef = ref(storage, 'submissions');
    const submissionRef = ref(storage, 'submissions/' + problem_id + '/' + uid + '/' + submission.name);
    uploadBytes(submissionRef, submission).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }, (error) => {
      console.log(error);
    });
    const db = useFirestore();
    // const userDoc = doc(db, 'users', uid);


  }

}