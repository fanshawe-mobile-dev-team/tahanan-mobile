import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  List,
  Surface,
  Icon,
} from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import colors from '../../../theme/colors';

// const BOTTOM_APPBAR_HEIGHT = 80;
// const MEDIUM_FAB_HEIGHT = 56;

function TaskListScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = currentDate.toDateString();
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      setCurrentDate(params.date);
    },
    [setOpen, setDate, setCurrentDate],
  );

  const openTaskHandler = async () => {
    // TODO: create handler to open task
  };

  const sampleTasks = [
    {
      id: 1,
      title: 'Vacuum Living Room',
      description: 'Use the vacuum cleaner to thoroughly clean the carpets, corners, and under furniture in the living room. Pay special attention to high-traffic areas.',
    },
    {
      id: 2,
      title: 'Clean Bathroom',
      description: "Scrub and sanitize all surfaces in the bathroom, including the toilet, sink, shower, and mirrors. Don't forget to replace used towels with fresh ones.",
    },
    {
      id: 3,
      title: 'Mop Kitchen Floor',
      description: 'Mop the kitchen floor using a suitable cleaning solution. Pay attention to spills and stains. Move furniture if necessary to ensure thorough cleaning.',
    },
    {
      id: 4,
      title: 'Dust Furniture',
      description: "Dust all surfaces of furniture in the house using a microfiber cloth. Don't forget shelves, tabletops, and decorative items. Wipe surfaces if needed.",
    },
    {
      id: 5,
      title: 'Empty Trash Bins',
      description: 'Empty all trash bins in the house. Replace liners if necessary. Take the trash outside to the designated collection area.',
    },
    {
      id: 6,
      title: 'Organize Closet',
      description: 'Sort through clothing and items in the closet. Organize and declutter by donating or disposing of items not needed. Arrange clothes neatly and categorize items.',
    },
  ];

  return (
    <Container>
      <TouchableOpacity onPress={() => setOpen(true)}>
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
      </TouchableOpacity>

      <List.Section style={{ marginTop: 24 }}>
        <Text style={commonStyles.displayHeading}>Tasks</Text>
        {sampleTasks.map(({ id, title, description }) => (
          <List.Item
            key={id}
            style={commonStyles.taskListItem}
            title={title}
            description={description}
            left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
            right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
          />
        ))}
      </List.Section>

    </Container>
  );
}

export default TaskListScreen;
