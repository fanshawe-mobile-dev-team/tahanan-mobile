import React, { useEffect, useState } from 'react';
import {
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, Avatar, ActivityIndicator } from 'react-native-paper';
import moment from 'moment';
import commonStyles from '../../../theme/commonStyles';
import { fetchTask, updateTask } from '../../../utils/api/taskApi';
import colors from '../../../theme/colors';
import Container from '../../common/Container';
import { DEFAULT_DATE_DISPLAY_FORMAT } from '../../../utils/api/constants';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  assigneeContainer: {
    marginVertical: 20,
  },
  assignee: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  loadingContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  status: {
    fontWeight: 'bold',
  },
});

function TaskScreen({ navigation, route }) {
  const [task, setTask] = useState(route.params.task);
  const [loading, setLoading] = useState(false);

  const handleToggleComplete = async (isCompleted) => {
    setLoading(true);

    const input = {
      taskId: task.id,
      isCompleted,
    };

    const updatedTask = await updateTask(input);

    setTask(updatedTask);
    setLoading(false);
  };

  const {
    dueDate, description, assignedUser, isCompleted,
  } = task;

  return (
    <Container>

      <Text style={styles.text}>
        {`Due: ${moment(dueDate).format(DEFAULT_DATE_DISPLAY_FORMAT)}`}
      </Text>
      <View style={styles.assigneeContainer}>
        <Text style={styles.text}>Assigned to:</Text>
        <View style={styles.assignee}>
          <Avatar.Icon size={25} icon="account" />
          <Text style={styles.text}>{assignedUser}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text>Status: </Text>
        <Text style={[styles.status, { color: isCompleted ? colors.success.main : colors.error.main }]}>{isCompleted ? 'Completed' : 'Incomplete'}</Text>
      </View>
      <Text style={commonStyles.displayHeading}>
        Description
      </Text>
      <Text style={commonStyles.displaySubheading}>
        {description}
      </Text>
      <View style={styles.actions}>
        <Button
          mode="contained"
          disabled={loading}
          onPress={() => handleToggleComplete(!isCompleted)}
        >
          {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}

        </Button>
      </View>
    </Container>
  );
}

export default TaskScreen;
