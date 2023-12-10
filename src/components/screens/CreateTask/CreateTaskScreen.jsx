import React, { useRef, useState, useEffect } from 'react';
import {
  View, Text,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
// import colors from '../../../theme/colors';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';

function CreateTaskScreen({ navigation }) {
  // const [taskId, setTaskId] = useState();
  const [creatorId, setCreatorId] = useState('testUser');
  const [userIds, setUserIds] = useState([]);
  const [homeId, setHomeId] = useState('homeId');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
    <Container>
      <Text style={commonStyles.displayHeading}>Create a New Task</Text>
      <Text style={commonStyles.displaySubheading}>
        Enter the following information to create a task
      </Text>
      <View>
        <TextInput
          style={commonStyles.commonInput}
          label="Task"
          placeholder="Enter task name"
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => descriptionRef.current.focus()}
        />
        <TextInput
          ref={descriptionRef}
          style={commonStyles.commonInput}
          label="Description"
          placeholder="Enter your task description"
          value={description}
          onChangeText={setDescription}
          onSubmitEditing={() => userIdRef.current.focus()}
        />
        <TextInput
          ref={userIdRef}
          style={commonStyles.commonInput}
          label="Assigned Member/s"
          placeholder="Enter username to assign"
          // TODO: correct this
          // value={userIds}
          // onChangeText={setUserIds}
          onSubmitEditing={() => dueAtRef.current.focus()}
        />
        <DatePickerInput
          locale="en"
          label="Due Date"
          value={dueAt}
          onChange={(d) => setDueAt(d)}
          inputMode="start"
        />

        <View style={commonStyles.buttonContainer}>
          <Button mode="contained" onPress={handleSubmit}>Add Task</Button>

          <Button mode="contained" buttonColor="#777680" style={commonStyles.greyButton} onPress={() => navigation.navigate('TaskList')}>Cancel</Button>
        </View>
      </View>
    </Container>
  );
}

export default CreateTaskScreen;
