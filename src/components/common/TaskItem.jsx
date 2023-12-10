import React from 'react';
import { TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../theme/commonStyles';

function TaskItem({ task }) {
  const navigation = useNavigation();

  const {
    description, name, isCompleted, id,
  } = task;

  const handleClickTask = () => {
    navigation.navigate('Task', { task });
  };

  return (
    <TouchableOpacity key={id} onPress={() => handleClickTask(task)}>
      <List.Item
        style={commonStyles.taskListItem}
        title={name}
        description={description}
        left={(props) => (isCompleted ? (
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
