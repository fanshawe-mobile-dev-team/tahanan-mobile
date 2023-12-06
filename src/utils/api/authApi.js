import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc, setDoc,
} from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

export const loginUser = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch ({ code, message }) {
    console.log({ code, message });
    return null;
  }
};

export const registerUser = async (input) => {
  try {
    const {
      firstName, lastName, email, password, username, phone,
    } = input;
    const { user: newUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    if (newUser) {
      await setDoc(doc(db, 'users', newUser.uid), {
        firstName,
        lastName,
        email,
        username,
        phone,
      });
    }

    const user = await loginUser(email, password);
    return user;
  } catch ({ code, message }) {
    console.log({ code, message });
    return null;
  }
};
