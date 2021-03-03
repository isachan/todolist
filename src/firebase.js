import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBPk695lQMXkvrtexnmGL_y2ryd5xCY4QE',
  authDomain: 'todolist-bad01.firebaseapp.com',
  projectId: 'todolist-bad01',
  storageBucket: 'todolist-bad01.appspot.com',
  messagingSenderId: '313499604108',
  appId: '1:313499604108:web:a81168068be2745ffb97a9',
  measurementId: 'G-499HFVPY15'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
