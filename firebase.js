import fb from "firebase/app"
import "firebase/auth"

// put your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyDmT-oN49541m8WeYffBohNte6zqAPZ5Qk",
  authDomain: "fluted-anthem-274223.firebaseapp.com",
  databaseURL: "https://fluted-anthem-274223.firebaseio.com",
  projectId: "fluted-anthem-274223",
  storageBucket: "fluted-anthem-274223.appspot.com",
  messagingSenderId: "812622916919",
  appId: "1:812622916919:web:01e05b825197a8a71b7eb2",
}

const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()

const googleProvider = new fb.auth.GoogleAuthProvider()

const firebaseAuth = firebase?.auth()

export { firebase, googleProvider, fb, firebaseAuth }
