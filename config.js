import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyAUyXEsbxEZ3jowjmEGOtj6jgmz2i-r2VE",
    authDomain: "barter-app-c8a05.firebaseapp.com",
    databaseURL: "https://barter-app-c8a05.firebaseio.com",
    projectId: "barter-app-c8a05",
    storageBucket: "barter-app-c8a05.appspot.com",
    messagingSenderId: "199792272386",
    appId: "1:199792272386:web:f8fe64bed90ef73820731b"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();