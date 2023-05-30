import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import {
    initializeFirestore,
  } from 'firebase/firestore/lite';

const  firebaseApp = initializeApp ({
    apiKey: "AIzaSyB_cvZxgbehB4IMfZ531USoKT9LWQTOeV4",
    authDomain: "deskly-ts.firebaseapp.com",
    projectId: "deskly-ts",
    storageBucket: "deskly-ts.appspot.com",
    messagingSenderId: "974123850336",
    appId: "1:974123850336:web:f16f03a13a755ba35b8105",
    measurementId: "G-62C67ESB12"
});

export const Providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider()
};
initializeFirestore(firebaseApp, {
    ignoreUndefinedProperties: true
})
const db = getFirestore()
const auth = getAuth();
const storage = getStorage()
const Fire = firebaseApp

export  {db, Fire, auth, storage}
