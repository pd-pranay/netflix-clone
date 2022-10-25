import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDHIT_im7NvDZsluXJBzH3xYiUNAU59Qg",
    authDomain: "netflix-clone-78f64.firebaseapp.com",
    projectId: "netflix-clone-78f64",
    storageBucket: "netflix-clone-78f64.appspot.com",
    messagingSenderId: "267160210135",
    appId: "1:267160210135:web:cb00531fe6cbc871f07e92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireatore();
const auth = firebase.auth();

export { auth };
export default db;