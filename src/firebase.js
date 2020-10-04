import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: 'AIzaSyAt0wKvrJzQu7_kaD7FLxw2kg_QnnQ_sZ0',
  authDomain: 'clone-b17e6.firebaseapp.com',
  databaseURL: 'https://clone-b17e6.firebaseio.com',
  projectId: 'clone-b17e6',
  storageBucket: 'clone-b17e6.appspot.com',
  messagingSenderId: '850933406974',
  appId: '1:850933406974:web:d3d599dde66ec92ad5d9af',
  measurementId: 'G-D59MCXT0PP',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
