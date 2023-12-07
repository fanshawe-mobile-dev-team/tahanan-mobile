import React from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import {
  Avatar, Icon, Text,
} from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  list: {
    marginBottom: 48,
  },
  homeRequest: {
    borderColor: colors.outline.main,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeRequestDetails: {
    flexGrow: 1,
    marginHorizontal: 16,
  },
  homeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  senderText: {},
});

const sampleData = [
  {
    id: 1,
    owner: {
      id: 'user-1',
      username: 'user1',
    },
    sender: {
      id: 'user',
      username: 'You',
    },
    home: {
      id: 'home-1',
      name: 'Home 123',
    },
  },
  {
    id: 2,
    owner: {
      id: 'user-2',
      username: 'user2',
    },
    sender: {
      id: 'user',
      username: 'You',
    },
    home: {
      id: 'home-2',
      name: 'Home 234',
    },
  },
];

function HomeRequests() {
  return (
    <View style={styles.list}>
      <Text style={commonStyles.displayHeading}>Home Requests</Text>
      {sampleData.map(({ id, home, owner }) => (
        <TouchableOpacity
          key={id}
          style={[
            styles.homeRequest,
            {
              marginBottom: 10,
            },
          ]}
        >
          <Avatar.Text label={home.name[0].toUpperCase()} />
          <View style={styles.homeRequestDetails}>
            <Text style={styles.homeName}>{home.name}</Text>
            <Text>{owner.username}</Text>
          </View>
          <Icon size={32} source="chevron-right" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default HomeRequests;
