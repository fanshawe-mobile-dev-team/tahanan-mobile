import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, Alert, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Button, TextInput, List } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import colors from '../../../theme/colors';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import { useProfile } from '../../hoc/ProfileContext';
import { createTask } from '../../../utils/api/taskApi';

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
});

function CreateTaskScreen({ navigation }) {
  const { profile } = useProfile();

  const [assignedUser, setAssignedUser] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState();

  // const userIdRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  // TODO: Handle submit function
  const handleSubmit = async () => {
    try {
      const input = {
        creatorId: profile.username,
        homeId: profile.home.name,
        name,
        description,
        assignedUser,
        dueDate: moment(dueDate).format('YYYY-MM-DD'),
      };
      await createTask(input);
      navigation.navigate('TaskList');
    } catch (error) {
      Alert.alert('Unsuccessful', error.message);
    }
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setAssignedUser('');
      setName('');
      setDescription('');
      setDueDate('');
    }
  }, [isFocused]);

  return (
    <Container>
      <Text style={commonStyles.displayHeading}>Create a New Task</Text>
      <Text style={commonStyles.displaySubheading}>
        Enter the following information to create a task
      </Text>
      <View style={styles.form}>
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
          onSubmitEditing={() => dueDateRef.current.focus()}
        />
        <DatePickerInput
          ref={dueDateRef}
          locale="en"
          label="Due Date"
          value={dueDate}
          onChange={(d) => setDueDate(d)}
          inputMode="start"
        />
      </View>
      <View style={styles.form}>
        <Text style={commonStyles.displayHeading2}>Assign Task to:</Text>
        {profile.home.users.map((username) => {
          const isActive = assignedUser === username;

          return (
            <TouchableOpacity
              key={username}
              activeOpacity={0.2}
              onPress={() => setAssignedUser(username)}
            >
              <List.Item
                style={[commonStyles.taskListItem,
                  {
                    backgroundColor: isActive
                      ? colors.primary.main
                      : colors.primary.light60,
                  }]}
                title={username}
                titleStyle={{ color: isActive ? '#fff' : '#000' }}
                right={(props) => (
                  <List.Icon
                    {...props}
                    icon={isActive ? 'checkbox-marked' : 'checkbox-blank-outline'}
                    color={isActive ? '#fff' : '#000'}
                  />
                )}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <Button mode="contained" onPress={handleSubmit}>Add Task</Button>
      <Button mode="contained" buttonColor="#777680" style={commonStyles.greyButton} onPress={() => navigation.navigate('TaskList')}>Cancel</Button>
    </Container>
  );
}

export default CreateTaskScreen;
