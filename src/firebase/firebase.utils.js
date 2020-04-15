import firebase from "firebase/app";
import "firebase/firestore"; //per storage
import "firebase/auth"; //per signin dhe signup

const config = {
  apiKey: "AIzaSyBuH5jF3kWdKmS2pv2lZWkOW78ZCHBFBcw",
  authDomain: "crwn-clothing-projectdb.firebaseapp.com",
  databaseURL: "https://crwn-clothing-projectdb.firebaseio.com",
  projectId: "crwn-clothing-projectdb",
  storageBucket: "crwn-clothing-projectdb.appspot.com",
  messagingSenderId: "156731598982",
  appId: "1:156731598982:web:f3b6066d31bf552a9fc907",
  measurementId: "G-T9NNECJD50",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //not false
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  //if exist: false
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
