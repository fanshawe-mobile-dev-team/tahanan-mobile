import React, { useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {
  List,
  Surface,
  Button,
  IconButton,
  MD3Colors,
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePickerModal } from 'react-native-paper-dates';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

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

  return (
    <Container>
      <Surface style={commonStyles.commonSurface} elevation={4}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={commonStyles.dashbDate}>{formattedDate}</Text>
          <View>
            <IconButton
              icon="calendar"
              iconColor={MD3Colors.primary100}
              size={20}
              onPress={() => setOpen(true)}
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
        </View>
      </Surface>
      <List.Section style={{ marginTop: 24 }}>
        <Text style={commonStyles.displayHeading}>Tasks</Text>

        <List.Item
          style={commonStyles.taskListItem}
          title="Vacuum Living Room"
          description="Use the vacuum cleaner to thoroughly clean the carpets, corners, and under furniture in the living room. Pay special attention to high-traffic areas."
          left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
          right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
        />
        <List.Item
          style={commonStyles.taskListItem}
          title="Clean Bathroom"
          description="Scrub and sanitize all surfaces in the bathroom, including the toilet, sink, shower, and mirrors. Don't forget to replace used towels with fresh ones."
          left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
          right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
        />
        <List.Item
          style={commonStyles.taskListItem}
          title="Mop Kitchen Floor"
          description="Mop the kitchen floor using a suitable cleaning solution. Pay attention to spills and stains. Move furniture if necessary to ensure thorough cleaning."
          left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
          right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
        />
        <List.Item
          style={commonStyles.taskListItem}
          title="Dust Furniture"
          description="Dust all surfaces of furniture in the house using a microfiber cloth. Don't forget shelves, tabletops, and decorative items. Wipe surfaces if needed."
          left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
          right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
        />
        <List.Item
          style={commonStyles.taskListItem}
          title="Empty Trash Bins"
          description="Empty all trash bins in the house. Replace liners if necessary. Take the trash outside to the designated collection area."
          left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
          right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
        />
        <List.Item
          style={commonStyles.taskListItem}
          title="Organize Closet"
          description="Sort through clothing and items in the closet. Organize and declutter by donating or disposing of items not needed. Arrange clothes neatly and categorize items."
          left={(props) => <List.Icon {...props} icon="radiobox-marked" />}
          right={(props) => <List.Icon {...props} icon="open-in-new" onPress={openTaskHandler} />}
        />
      </List.Section>

    </Container>
  );
}

export default TaskListScreen;
