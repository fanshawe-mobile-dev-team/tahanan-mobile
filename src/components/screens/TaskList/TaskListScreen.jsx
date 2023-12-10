import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  List,
  Surface,
  Icon,
  Tooltip,
} from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';
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
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const formattedDate = date.toDateString();

  const { home } = profile;

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );

  const isFocused = useIsFocused();

  const fetchTaskList = async () => {
    const query = {
      homeId: home.id,
      date: moment(date).format(API_DATE_FORMAT),
    };
    const tasksData = await fetchHomeTasks(query);

    setTasks(tasksData);
  };

  useEffect(() => {
    if (isFocused) {
      fetchTaskList();
    }
  }, [isFocused]);

  return (
    <Container>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <Tooltip title="Click to hange the date">
          <Surface style={commonStyles.commonSurface} elevation={4}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={commonStyles.dashbDate2}>
                {formattedDate}
              </Text>
              <Icon
                source="calendar"
                color={colors.primary.main}
                size={30}
              />

              <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={date}
                onConfirm={onConfirmSingle}
              />
            </View>
          </Surface>
        </Tooltip>
      </TouchableOpacity>

      <List.Section style={{ marginTop: 24 }}>
        <Text style={commonStyles.displayHeading}>Tasks</Text>
        {tasks.map((task) => <TaskItem key={task.id} task={task} showAssignee />)}
      </List.Section>

    </Container>
  );
}

export default TaskListScreen;
