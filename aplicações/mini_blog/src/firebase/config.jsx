// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFireStore } from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgMvpRnyqspoLCaOCI9fv-3xuVlZBrFdo",
  authDomain: "mini-blog-64ae3.firebaseapp.com",
  projectId: "mini-blog-64ae3",
  storageBucket: "mini-blog-64ae3.appspot.com",
  messagingSenderId: "468836626416",
  appId: "1:468836626416:web:d942b34b449b3ddc5af735"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFireStore(app)

export { db }
