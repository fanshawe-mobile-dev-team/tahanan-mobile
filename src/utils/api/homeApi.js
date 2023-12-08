import {
  addDoc, collection, doc, getDoc, setDoc,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

export const createHome = async (input) => {
  const { name } = input;
  // SAMPLE INPUT
  //  {
  //   ownerId: '1',
  //   name: 'home1',
  //   addressLine1: 'asd',
  //   addressLine2: 'dsa',
  //   city: '1dsa',
  //   state: 'canada',
  //   postalCode: '123 321',
  //   description: 'asd',
  // }

  try {
    const homeRef = await addDoc(collection(db, 'homes', name), input);

    return homeRef.id;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const fetchHome = async (id) => {
  const homeRef = doc(db, 'homes', id);
  const home = await getDoc(homeRef);

  return home.data();
};

export const updateHome = async (input) => {
  // SAMPLE INPUT
  // {
  //     id: 'ejt4W18HpPI2EKeMUTVX',
  //     name: 'home1',
  //     addressLine1: 'updated',
  //     addressLine2: 'updated',
  //     city: 'updated',
  //     state: 'updated',
  //     postalCode: 'updated',
  //     description: 'updated',
  //   }

  const { id, ...updateValues } = input;
  const homeRef = doc(db, 'homes', id);

  try {
    await setDoc(homeRef, updateValues);

    const home = await getDoc(homeRef);

    return home.data();
  } catch ({ message }) {
    throw new Error(message);
  }
};
