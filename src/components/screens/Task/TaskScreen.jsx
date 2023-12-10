import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet, Text, View,
} from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import moment from 'moment';
import { BottomSheet, ListItem } from '@rneui/themed';
import * as SMS from 'expo-sms';
import * as MailComposer from 'expo-mail-composer';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../../theme/commonStyles';
import { deleteTask, updateTask } from '../../../utils/api/taskApi';
import colors from '../../../theme/colors';
import Container from '../../common/Container';
import { DEFAULT_DATE_DISPLAY_FORMAT } from '../../../utils/api/constants';
import { useProfile } from '../../hoc/ProfileContext';
import { fetchUser } from '../../../utils/api/authApi';

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
  actions: {
    gap: 10,
  },
});

function TaskScreen({ route }) {
  const [task, setTask] = useState(route.params.task);
  const [loading, setLoading] = useState(false);
  const { profile } = useProfile();
  const [showDrawer, setShowDrawer] = useState(false);
  const [user, setUser] = useState();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const navigation = useNavigation();

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
    dueDate, description, assignedUser, isCompleted, name,
  } = task;

  const sendAlert = () => Alert.alert('Success', 'Your email has been sent successfully', [
    { text: 'Okay' },
  ]);

  const handleRemindSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(
        [user.phone],
        `Hi ${user.firstName}, just reminding you about your ${name} task due ${moment(dueDate).format(DEFAULT_DATE_DISPLAY_FORMAT)}`,
      );
    } else {
      Alert.alert('Permissions Required', 'Please give Tahanan permission to send SMS.');
    }
  };

  const handleRemindEmail = async () => {
    const options = {
      recipients: [user.email],
      subject: `Tahanan Task Reminder: ${name}`,
      body: `Hi ${user.firstName},\nJust reminding you about your ${name} task due ${moment(dueDate).format(DEFAULT_DATE_DISPLAY_FORMAT)}`,
      isHtml: false,
    };

    MailComposer.composeAsync(options).then(() => sendAlert());
  };

  const isOwner = profile.username === task.assignedUser;

  const list = [
    { title: 'SMS', onPress: handleRemindSMS },
    { title: 'Email', onPress: handleRemindEmail },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: colors.secondary.main },
      titleStyle: { color: 'white' },
      onPress: () => setShowDrawer(false),
    },
  ];

  const handleDeleteTask = async () => {
    try {
      await deleteTask(task.id);
      setShowConfirmDelete(false);
      navigation.goBack();
    } catch ({ message }) {
      Alert.alert('Delete Task Failed', message);
    }
  };

  const deleteChoices = [
    {
      title: 'Continue to delete task',
      onPress: handleDeleteTask,
      titleStyle: { color: colors.error.main },
    },
    {
      title: 'Cancel',
      onPress: () => setShowConfirmDelete(false),
    },
  ];

  const getUser = async () => {
    const userData = await fetchUser(task.assignedUser);

    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, [task]);

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
        {!isOwner && (
          <Button
            mode="outlined"
            onPress={() => setShowDrawer(true)}
          >
              {`Remind ${assignedUser}`}
          </Button>
        )}
        <Button
          mode="contained"
          disabled={loading}
          buttonColor={colors.error.main}
          onPress={() => setShowConfirmDelete(true)}
        >
          Delete Task
        </Button>
      </View>
      <BottomSheet
        modalProps={{}}
        isVisible={showDrawer}
        onBackdropPress={() => setShowDrawer(false)}
        containerStyle={{ backgroundColor: 'transparent' }}
      >
        {list.map((l) => (
          <ListItem
            key={l.title}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      <BottomSheet
        modalProps={{}}
        isVisible={showConfirmDelete}
        onBackdropPress={() => setShowConfirmDelete(false)}
        containerStyle={{ backgroundColor: 'transparent' }}
      >
        {deleteChoices.map((l) => (
          <ListItem
            key={l.title}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </Container>
  );
}

export default TaskScreen;
