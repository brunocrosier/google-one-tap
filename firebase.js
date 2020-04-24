import fb from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
import "firebase/analytics"

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

const db = firebase?.firestore()

const googleProvider = new fb.auth.GoogleAuthProvider()

const facebookProvider = new fb.auth.FacebookAuthProvider()

const timeStampFromDate = fb.firestore.Timestamp.fromDate

const timestampNow = fb.firestore.Timestamp.now

const storage = firebase.storage()

const analytics = firebase.analytics

const firebaseAuth = firebase?.auth()

const fbDotAuth = fb.auth

export {
  firebase,
  googleProvider,
  facebookProvider,
  fb,
  timeStampFromDate,
  storage,
  analytics,
  db,
  firebaseAuth,
  timestampNow,
  fbDotAuth,
}
