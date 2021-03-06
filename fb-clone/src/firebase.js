
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBi-zMmseFsa1FFIbej-q093J7--8tXgoQ",
    authDomain: "fb-clone-c4a27.firebaseapp.com",
    projectId: "fb-clone-c4a27",
    storageBucket: "fb-clone-c4a27.appspot.com",
    messagingSenderId: "446351881544",
    appId: "1:446351881544:web:8a2ad4eee0f8780031ef7d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;