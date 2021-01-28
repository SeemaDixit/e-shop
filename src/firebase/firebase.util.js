import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCpEgDRlXoL05r7-Tb0BeYo04Zm6scgPXA",
    authDomain: "e-shop-db-3adb4.firebaseapp.com",
    projectId: "e-shop-db-3adb4",
    storageBucket: "e-shop-db-3adb4.appspot.com",
    messagingSenderId: "1090789944863",
    appId: "1:1090789944863:web:47010eb0b803afc456ef2a"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'});

  export const signInWithGoogle = ()  =>  auth.signInWithPopup(provider);

  export default firebase;
