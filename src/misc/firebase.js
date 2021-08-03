import firebase from 'firebase-app';

const config = {
  apiKey: 'AIzaSyCExW7BoJE3Vhk_FjLjNy6aPcZWUNneZRY',
  authDomain: 'message-board-72f4c.firebaseapp.com',
  databaseURL:
    'https://message-board-72f4c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'message-board-72f4c',
  storageBucket: 'message-board-72f4c.appspot.com',
  messagingSenderId: '37106640074',
  appId: '1:37106640074:web:5510247d719e467f23c033',
};

const app = firebase.initializeApp(config);
