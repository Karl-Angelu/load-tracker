import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBLIdui5tztBnSy9kBpx8JTvvLbo5hO26g",
    authDomain: "load-tracker-a6bee.firebaseapp.com",
    projectId: "load-tracker-a6bee",
    storageBucket: "load-tracker-a6bee.appspot.com",
    messagingSenderId: "232506288561",
    appId: "1:232506288561:web:d48081f1fe18893f78f590"
})
export const auth = app.auth()
export const firestore = app.firestore()
export default app