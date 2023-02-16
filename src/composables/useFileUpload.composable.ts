import calculatePercentage from "@/utils/calculatePercentage";
import {
  type TaskState,
  type FirebaseStorage,
  getDownloadURL,
  ref as fireRef,
  uploadBytesResumable,
} from "firebase/storage";
import { ref, computed } from 'vue';

const useFileUpload = () => {
  const downloadUrl = ref('');
  const hasFailed = ref(false);
  const state = ref<TaskState>();
  const progress = ref(0);

  const progressInPercentage = computed(() => {
    return `${progress.value}%`;
  });

  const uploadFile = ({
    storage,
    path,
    data
  }: {
    storage: FirebaseStorage,
    path: string,
    data: Blob | Uint8Array | ArrayBuffer | File
  }) => {
    hasFailed.value = false;
    progress.value = 0;

    const storageRef = fireRef(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, data);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        progress.value = calculatePercentage(
          snapshot.bytesTransferred,
          snapshot.totalBytes,
        )
        state.value = snapshot.state;
      }, () => {
        hasFailed.value = true;
      },
      async () => {
        state.value = 'success';
        downloadUrl.value = await getDownloadURL(uploadTask.snapshot.ref);
      },
    );
    return uploadTask;
  }

  return {
    uploadFile: uploadFile,
    progressInPercentage: progressInPercentage,
    downloadUrl: downloadUrl,
    hasFailed: hasFailed,
    state: state,
    progress: progress,
  };

};

export default useFileUpload;