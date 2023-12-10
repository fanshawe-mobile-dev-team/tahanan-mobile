import {
  addDoc, collection, deleteDoc, doc, getDoc, setDoc,
} from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { fetchHome } from './homeApi';

const taskCollection = collection(db, 'tasks');

export const createTask = async (input) => {
  // SAMPLE INPUT
  // const input = {
  //   creatorId: 'user1',
  //   homeId: 'home1',
  //   name: 'Sweep floor',
  //   description: 'Sweep floor of the whole house',
  //   assignedUser: 'user1',
  //   dueDate: '2022-12-9'
  // }

  try {
    const { homeId, creatorId } = input;

    const home = await fetchHome(homeId);

    if (!home) throw new Error('Home does not exist.');
    if (!home.users.includes(creatorId)) throw new Error('You do not have access to this home.');

    const taskRef = await addDoc(taskCollection, input);
    const newTask = await getDoc(taskRef);

    return newTask.data();
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const fetchTask = async (id) => {
  try {
    const taskRef = doc(db, 'tasks', id);
    const taskSnapshot = await getDoc(taskRef);

    return taskSnapshot.data();
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const updateTask = async (input) => {
  // SAMPLE INPUT
  // const input = {
  //   taskId: '0COX8HmUCfyeD9ezI8tj',
  //   name: 'Wipe windows',
  //   description: 'Wip all the windows',
  //   assignedUser: 'testUser2',
  //   isCompleted: true
  // }

  try {
    const { taskId, ...updateValues } = input;

    const taskRef = doc(db, 'tasks', taskId);
    await setDoc(taskRef, updateValues, { merge: true });

    const updatedTask = (await getDoc(taskRef)).data();

    return updatedTask;
  } catch ({ message }) {
    throw new Error(message);
  }
};

export const deleteTask = async (taskId) => {
  const taskRef = doc(db, 'tasks', taskId);

  try {
    await deleteDoc(taskRef);
  } catch ({ message }) {
    throw new Error(message);
  }
};
