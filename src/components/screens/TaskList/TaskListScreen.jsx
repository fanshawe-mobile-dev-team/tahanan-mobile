import React, { useEffect, useState } from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  List,
  Icon,
} from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import colors from '../../../theme/colors';
import TaskItem from '../../common/TaskItem';
import { fetchHomeTasks } from '../../../utils/api/taskApi';
import { useProfile } from '../../hoc/ProfileContext';
import { API_DATE_FORMAT } from '../../../utils/api/constants';

function TaskListScreen() {
  const { profile } = useProfile();
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const formattedDate = date.toDateString();

  const { home } = profile;

  const isFocused = useIsFocused();

  const fetchTaskList = async () => {
    const query = {
      homeId: home.name,
      date: moment(date).format(API_DATE_FORMAT),
    };
    const tasksData = await fetchHomeTasks(query);

    setTasks(tasksData);
  };

  useEffect(() => {
    if (isFocused) {
      fetchTaskList();
    }
  }, [isFocused, date]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  return (
    <Container>
      <TouchableOpacity onPress={showDatePicker} activeOpacity={0.9}>
        <View style={commonStyles.commonSurface} elevation={4}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={commonStyles.dashbDate2}>
              {formattedDate}
            </Text>
            <Icon
              source="calendar"
              color={colors.primary.main}
              size={30}
            />
          </View>
        </View>
      </TouchableOpacity>

      <List.Section style={{ marginTop: 24 }}>
        <Text style={commonStyles.displayHeading}>Tasks</Text>
        {tasks.map((task) => <TaskItem key={task.id} task={task} showAssignee />)}
      </List.Section>
      {showPicker && (
      <DateTimePicker
        value={date}
        mode="date"
        display="spinner"
        onChange={onDateChange}
      />
      )}
    </Container>
  );
}

export default TaskListScreen;
