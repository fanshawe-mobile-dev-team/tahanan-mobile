import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  List,
  Surface,
  Avatar,
  ActivityIndicator,
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import { useProfile } from '../../hoc/ProfileContext';
import { DEFAULT_AVATAR_IMAGE } from '../../../utils/api/constants';
import { fetchUserTasks } from '../../../utils/api/taskApi';
import colors from '../../../theme/colors';
import TaskItem from '../../common/TaskItem';

const styles = StyleSheet.create({
  noTaskContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
  },
  headContainer: {

  },
});

// TODO:Set username in hello and number of tasks
function DashboardScreen() {
  const { profile } = useProfile();
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const fetchTodayTask = async () => {
    const date = moment().format('YYYY-MM-DD');

    const query = {
      userId: profile.username,
      date,
    };

    const tasksData = await fetchUserTasks(query);

    setTasks(tasksData);
    setLoading(false);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchTodayTask();
    }
  }, [isFocused]);

  const incompleteTasks = tasks.filter((task) => !task.isCompleted).length;

  let todayMessage;

  switch (incompleteTasks) {
    case 0:
      todayMessage = 'You have completed all your tasks today. Good job!';
      break;
    case 1:
      todayMessage = 'You have 1 incomplete task today.';
      break;
    default:
      todayMessage = `You have ${incompleteTasks} incomplete task today.`;
      break;
  }

  return (
    <Container>
      <Text style={commonStyles.dashbDate}>{formattedDate}</Text>
      <Surface style={commonStyles.commonSurface} elevation={4}>
        <Avatar.Image size={60} source={DEFAULT_AVATAR_IMAGE} style={{ flexShrink: 0 }} />
        <View style={{ flexShrink: 1 }}>
          <Text style={commonStyles.commonTitle}>{`Hello, ${profile.username}!`}</Text>
          <Text style={commonStyles.commonSubTitle}>
            {todayMessage}
          </Text>
        </View>
      </Surface>
      {loading && (
        <View style={styles.noTaskContainer}>
          <ActivityIndicator
            animating
            color={colors.primary.main}
            size={50}
            style={{ marginBottom: 20 }}
          />
          <Text>Loading Tasks</Text>
        </View>
      )}

      {tasks.length ? (
        <List.Section style={{ marginTop: 24 }}>
          <Text style={commonStyles.displayHeading}>Tasks</Text>
          {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        </List.Section>
      ) : (
        <View style={styles.noTaskContainer}>
          <Text style={commonStyles.displayHeading}>You do not have any tasks today</Text>
          <Text>You can take it easy!</Text>
        </View>
      )}

    </Container>
  );
}

export default DashboardScreen;
