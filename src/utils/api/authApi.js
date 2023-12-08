import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  collection,
  doc, getDoc, getDocs, query, setDoc, where,
} from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

const usersCollection = collection(db, 'users');

export const loginUser = async (input) => {
  const { email, password } = input;

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const q = query(usersCollection, where('email', '==', user.email));

    const querySnapshot = await getDocs(q);

    const userData = querySnapshot.docs[0].data();

    return userData;
  } catch ({ code, message }) {
    console.log({ code, message });
    throw new Error('You have entered invalid credentials.');
  }
};

export const registerUser = async (input) => {
  try {
    const {
      firstName, lastName, email, password, username, phone,
    } = input;

    // Check for existing username and email
    const userRef = doc(db, 'users', username);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      throw new Error('Username already taken');
    }

    // Create User
    const { user: newUser } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    if (newUser) {
      await setDoc(doc(db, 'users', username), {
        firstName,
        lastName,
        email,
        phone,
        subId: newUser.uid,
        username,
      });
    }
  } catch ({ code, message }) {
    let messageOutput;

    if (code === 'auth/email-already-in-use') {
      messageOutput = 'Email address already in use.';
    } else {
      messageOutput = message;
    }

    throw new Error(messageOutput);
  }
};
