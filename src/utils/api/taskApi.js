import {
  addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where,
} from 'firebase/firestore';
import { db } from './firebaseConfig';
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

export const fetchUserTasks = async (queryFields) => {
  // SAMPLE QUERY FIELDS
  // const query = {
  //   userId: 'testUser',
  //   // date: '2022-12-9',
  // };
  const { userId, date } = queryFields;

  if (!userId) throw new Error('User ID is required');

  let taskQuery;

  if (date) {
    taskQuery = query(taskCollection, where('assignedUser', '==', userId), where('dueDate', '==', date));
  } else {
    taskQuery = query(taskCollection, where('assignedUser', '==', userId));
  }

  const taskSnapshots = await getDocs(taskQuery);

  const tasks = taskSnapshots.docs.map((snap) => ({ ...snap.data(), id: snap.id }));

  return tasks;
};

export const fetchHomeTasks = async (queryFields) => {
  // SAMPLE QUERY FIELDS
  // const query = {
  //   homeId: 'home1',
  //   date: '2022-12-9',
  // };
  const { homeId, date } = queryFields;

  if (!homeId) throw new Error('User ID is required');

  let taskQuery;

  if (date) {
    taskQuery = query(taskCollection, where('homeId', '==', homeId), where('dueDate', '==', date));
  } else {
    taskQuery = query(taskCollection, where('homeId', '==', homeId));
  }

  const taskSnapshots = await getDocs(taskQuery);

  const tasks = taskSnapshots.docs.map((snap) => ({ ...snap.data(), id: snap.id }));

  return tasks;
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

    const updatedTask = await getDoc(taskRef);

    return { ...updatedTask.data(), id: taskId };
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
