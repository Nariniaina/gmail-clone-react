//to use firebase app
// import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9
//to use auth
// import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9
//to use firestore
// import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyAsivh96nyGf-UjpzWnAxjewVX88lHK6AY",
    authDomain: "clone-50360.firebaseapp.com",
    projectId: "clone-50360",
    storageBucket: "clone-50360.appspot.com",
    messagingSenderId: "721319601000",
    appId: "1:721319601000:web:cf56cde7f3aa4877126cdd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// To connect your app with firebase, database
const db = firebaseApp.firestore();
// to get the db
const auth = firebase.auth();
// to get the auth function of firebase
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }