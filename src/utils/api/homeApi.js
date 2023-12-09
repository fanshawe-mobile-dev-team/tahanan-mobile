import {
  collection,
  deleteDoc,
  doc, getDoc, getDocs, query, setDoc, where,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

const homeRequestsCollection = collection(db, 'homeRequests');

export const createHome = async (input) => {
  const { name, ownerId } = input;
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
    // Check for existing username and email
    const homeRef = doc(db, 'homes', name);
    const homeSnapshot = await getDoc(homeRef);
    if (homeSnapshot.exists()) {
      throw new Error('Home name already already taken');
    }

    await setDoc(doc(db, 'homes', name), { ...input, users: [ownerId] });
    await setDoc(doc(db, 'users', ownerId), { homeId: name }, { merge: true });

    const newHome = (await getDoc(homeRef)).data();

    return newHome;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const fetchHome = async (id) => {
  if (!id) return null;

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

export const sendHomeRequest = async (input) => {
  // Sample Input
  // const input = {
  //   userId: 'user1',
  //   homeId: 'home1',
  //   ownerId: 'owner'
  // };

  const { userId, homeId } = input;

  try {
    // Check for existing username and email
    const homeRequestId = `${homeId}-${userId}`;

    const homeRequestRef = doc(db, 'homeRequests', homeRequestId);
    const homeRequestSnapshot = await getDoc(homeRequestRef);
    if (homeRequestSnapshot.exists()) {
      throw new Error('You already have a request for this home.');
    }

    await setDoc(doc(db, 'homeRequests', homeRequestId), input);

    const newHomeRequest = (await getDoc(homeRequestRef)).data();

    return newHomeRequest;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const acceptHomeRequest = async (homeRequestId) => {
  try {
    const homeRequestRef = doc(db, 'homeRequests', homeRequestId);
    const homeRequestSnapshot = await getDoc(homeRequestRef);

    if (!homeRequestSnapshot.exists()) {
      throw new Error('Home request does not exist');
    }

    const homeRequest = homeRequestSnapshot.data();

    await setDoc(doc(db, 'users', homeRequest.userId), { homeId: homeRequest.homeId }, { merge: true });

    await deleteDoc(homeRequestRef);
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const fetchHomeJoinRequests = async (homeId) => {
  try {
    const requestsQry = query(homeRequestsCollection, where('homeId', '==', homeId));
    const requestsSnapshots = await getDocs(requestsQry);

    const requests = requestsSnapshots.docs.map((request) => request.data());

    return requests;
  } catch ({ message }) {
    throw new Error(message);
  }
};
