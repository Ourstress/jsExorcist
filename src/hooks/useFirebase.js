import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

function useFirebase() {
  const [firestore, setFirestore] = useState(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    setFirestore(firebase.firestore());
  }, []);

  return { firestore, firebase };
}
export default useFirebase;
