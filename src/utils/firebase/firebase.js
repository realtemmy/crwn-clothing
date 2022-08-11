import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGFKSPaTSMUNs7P95FgOUgZ3GsvwtRrCA",
  authDomain: "crwn-clothing-570de.firebaseapp.com",
  projectId: "crwn-clothing-570de",
  storageBucket: "crwn-clothing-570de.appspot.com",
  messagingSenderId: "880339426213",
  appId: "1:880339426213:web:b1e278be4709570413664c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWIthGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, remainingData={}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userAuth)

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...remainingData
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }

    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
