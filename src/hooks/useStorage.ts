/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useState, useEffect } from "react";
import {
  StorageError,
  getDownloadURL,
  ref,
  uploadBytesResumable
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { v4 as createUUID } from "uuid";
import { db, storage } from "../config/firebase";

export function useStorage(file: any) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<StorageError | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const namePhoto = createUUID();
    const storageRef = ref(storage, `publicpictures/${namePhoto}`);
    const colletionRef = collection(db, `images`);

    uploadBytesResumable(storageRef, file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(storageRef);
        const createdAt = new Date();
        await addDoc(colletionRef, { url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
}
