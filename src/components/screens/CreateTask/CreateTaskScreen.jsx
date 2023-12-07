import React, { useRef, useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, ScrollView, KeyboardAvoidingView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';

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

function CreateTaskScreen({ navigation }) {
  // const [taskId, setTaskId] = useState();
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

  // TODO: set current date to task
  // Set Current Date to Task
  useEffect(() => {
    setCreatedAt(new Date());
  }, []);

  // TODO: set assigned users to task
  // Assign Users to Task
  const addUser = (userId) => {
    setUserIds((prevUserIds) => [...prevUserIds, userId]);
  };

  // TODO: Handle submit function
  const handleSubmit = async () => {
    const input = {
      creatorId,
      userIds,
      homeId,
      name,
      description,
      createdAt,
      dueAt,
      isCompleted,
    };

    // const task = await createTask(input);
    // console.log('CREATE TASK INPUT', user);

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
          <DatePickerInput
            locale="en"
            label="Birthdate"
            value={dueAt}
            onChange={(d) => setDueAt(d)}
            inputMode="start"
          />

          <Button mode="contained" onPress={handleSubmit}>Add Task</Button>

          <Button mode="contained" onPress={navigation.navigate('TaskList')}>Cancel</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default CreateTaskScreen;
