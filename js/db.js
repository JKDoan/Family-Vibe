// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlnlNgmTvzGtyR4kFWHiADtiyTMLqm_Og",
  authDomain: "family-vibe.firebaseapp.com",
  projectId: "family-vibe",
  storageBucket: "family-vibe.appspot.com",
  messagingSenderId: "862473737843",
  appId: "1:862473737843:web:ce75564571ac37b4c2fc06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
var ff = firebase.database.ref()
const database = getDatabase();

try {
  const querySnapshot = await getDocs(collection(db, "submitToApp"));
  querySnapshot.forEach((doc) => {

    console.log(`${doc.data().isMoodSubmitted}`);
    let moodCheck = doc.data().isMoodSubmitted;

    console.log(moodCheck)
    let moodref = firebase.database().ref('submitToApp/mood');

  });
} catch (e) {
  console.error("Error adding document: ", e);
}