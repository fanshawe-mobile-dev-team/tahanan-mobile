import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
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
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import { useProfile } from '../../hoc/ProfileContext';
import { DEFAULT_AVATAR_IMAGE } from '../../../utils/api/constants';
import { fetchUserTasks } from '../../../utils/api/taskApi';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  noTaskContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
  },
});

// TODO:Set username in hello and number of tasks
function DashboardScreen({ navigation }) {
  const { profile } = useProfile();
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const openTaskHandler = async () => {
    // TODO: create handler to open task
  };

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

  useEffect(() => {
    fetchTodayTask();
  }, []);

  const handleClickTask = (id) => {
    console.log(id);
    // console.log(navigation);
    navigation.navigate('Task', { taskId: id });
  };

  return (
    <Container>
      <Text style={commonStyles.dashbDate}>{formattedDate}</Text>
      <Surface style={commonStyles.commonSurface} elevation={4}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar.Image size={80} source={DEFAULT_AVATAR_IMAGE} />
          <View style={{ marginTop: 12 }}>
            <Text style={commonStyles.commonTitle}>{`Hello, ${profile.username}!`}</Text>
            <Text style={commonStyles.commonSubTitle}>You have 12 Tasks today</Text>
          </View>
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

          {tasks.map(({
            description, name, isCompleted, id,
          }) => (
            <TouchableOpacity key={id} onPress={() => handleClickTask(id)}>
              <List.Item
                style={commonStyles.taskListItem}
                title={name}
                description={description}
                left={(props) => (isCompleted ? <List.Icon {...props} icon="radiobox-marked" /> : <List.Icon {...props} icon="radiobox-blank" />)}
                right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
              />
            </TouchableOpacity>
          ))}
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
