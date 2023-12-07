import React, { useRef, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, KeyboardAvoidingView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 24,
  },
  subheading: {
    marginBottom: 28,
  },
});

function CreateTaskScreen() {

  //Randomize taskId
  const generateRandomTaskId = () => {
  const timestamp = new Date().getTime(); // Get current timestamp
  const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999

  // Combine timestamp and random number to create a unique ID
  const taskId = `task_${timestamp}_${randomNumber}`;

  return taskId;
};

  const [taskId, setTaskId] = useState(generateRandomTaskId());
  const [creatorId, setCreatorId] = useState('testUser');
  const [userIds, setUserIds] = useState([]);
  const [homeId, setHomeId] = useState('homeId');
  const [name, setName] = useState('taskName');
  const [description, setDescription] = useState('desc');
  const [createdAt, setCreatedAt] = useState(new Date());
  const [dueAt, setDueAt] = useState();
  const [isCompleted, setIsCompleted] = useState(false);

  const userIdRef = useRef();
  const descriptionRef = useRef();
  const dueAtRef = useRef();

  //Set Current Date to Task
  useEffect(() => {
    setCreatedAt(new Date());
  }, []);

  //Assign Users to Task
  const addUser = (userId) => {
    setUserIds((prevUserIds) => [...prevUserIds, userId]);
  };

  const handleSubmit = async () => {
    const input = {
      taskId,
      creatorId,
      userIds,
      homeId,
      name,
      description,
      createdAt,
      dueAt,
      isCompleted,
    };

    //const task = await createTask(input);
    console.log('CREATE TASK INPUT', user);

    // 
    navigation.navigate('TaskList');
  };

  return (
     <KeyboardAvoidingView style={[styles.container]}>
      <ScrollView>
        <Text style={styles.heading}>Create a New Task</Text>
        <Text style={styles.subheading}>
          Enter the following information to create a task
        </Text>
        <View>
          <TextInput
            style={styles.input}
            label="Task"
            placeholder="Enter task name"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => descriptionRef.current.focus()}
          />
          <TextInput
            ref={descriptionRef}
            style={styles.input}
            label="Description"
            placeholder="Enter your task description"
            value={description}
            onChangeText={setDescription}
            onSubmitEditing={() => userIdRef.current.focus()}
          />
          <TextInput
            ref={userIdRef}
            style={styles.input}
            label="Assigned Member/s"
            placeholder="Enter username to assign"
            value={userIds}
            onChangeText={setUserIds}
            onSubmitEditing={() => dueAtRef.current.focus()}
          />
          <TextInput
            ref={dueAtRef}
            style={styles.input}
            label="Due Date"
            placeholder="Set Due Date"
            value={dueAt}
            onChangeText={setDueAt}
          />
          
          <Button mode="contained" onPress={handleSubmit}>Add Task</Button>
          <Button style="buttonColor: '#777680'" mode="contained" onPress={navigation.navigate('TaskList')}>Cancel</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default CreateTaskScreen;
