import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfqv3TQRBR4MccvibWSISkrN2__xYRXbg",
  authDomain: "crwn-clothing-db-563ca.firebaseapp.com",
  projectId: "crwn-clothing-db-563ca",
  storageBucket: "crwn-clothing-db-563ca.appspot.com",
  messagingSenderId: "7448648980",
  appId: "1:7448648980:web:fc8bc0f9dc8e7820583601",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the users", error.message);
    }
  }

  return userDocRef;
};
