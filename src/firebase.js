import firebase from 'firebase'
import 'firebase/auth'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALYHoMdNbkizQAtgQ1ED8NjAbWqlLh3aE",
    authDomain: "prototype-lommejobber.firebaseapp.com",
    databaseURL: "https://prototype-lommejobber.firebaseio.com",
    projectId: "prototype-lommejobber",
    storageBucket: "prototype-lommejobber.appspot.com",
    messagingSenderId: "923881476825",
    appId: "1:923881476825:web:b8ab22bff5e60a18da64c8"
});

var db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }