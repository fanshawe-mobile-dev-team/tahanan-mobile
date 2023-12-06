import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDIlcrY0IBCeLDighzs_g6hEYazFqEElx4',
  authDomain: 'tahanan-7ff06.firebaseapp.com',
  projectId: 'tahanan-7ff06',
  storageBucket: 'tahanan-7ff06.appspot.com',
  messagingSenderId: '793811513410',
  appId: '1:793811513410:web:63c5fcec7b348b2c203ddb',
  measurementId: 'G-NP8YB5VYNL',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
