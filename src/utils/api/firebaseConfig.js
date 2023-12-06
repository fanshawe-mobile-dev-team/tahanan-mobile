import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDIlcrY0IBCeLDighzs_g6hEYazFqEElx4',
  authDomain: 'tahanan-7ff06.firebaseapp.com',
  projectId: 'tahanan-7ff06',
  storageBucket: 'tahanan-7ff06.appspot.com',
  messagingSenderId: '793811513410',
  appId: '1:793811513410:web:63c5fcec7b348b2c203ddb',
  measurementId: 'G-NP8YB5VYNL',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
