import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../theme/commonStyles';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  assignee: {
    color: colors.primary.main,
    fontWeight: 'bold',
  },
});

function TaskItem({ task, showAssignee }) {
  const navigation = useNavigation();

  const {
    description, name, isCompleted, id, assignedUser,
  } = task;

  const handleClickTask = () => {
    navigation.navigate('Task', { task });
  };

  return (
    <TouchableOpacity key={id} onPress={() => handleClickTask(task)}>
      <List.Item
        style={commonStyles.taskListItem}
        titleStyle={{ marginBottom: 5 }}
        title={(
          <View>
            <Text style={styles.title}>{name}</Text>
            {showAssignee && <Text style={styles.assignee}>{assignedUser}</Text>}
          </View>
)}
        description={description}
        right={(props) => (isCompleted ? (
          <List.Icon
            {...props}
            icon="checkbox-marked-circle-outline"
          />
        ) : (
          <List.Icon
            {...props}
            icon="checkbox-blank-circle-outline"
          />
        ))}
      />
    </TouchableOpacity>
  );
}

export default TaskItem;
